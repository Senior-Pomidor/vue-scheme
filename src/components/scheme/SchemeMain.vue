<script setup>

// XXX: на 45к мест перерисовка занимает 3 секунды

// TODO: внешний вид мест привести к одному (текст, бг, границы) +
// TODO: отрисовка на снимке с конфига места +
// TODO: курсор на нужный блок (не будем менять) +
// TODO: ховер +
// TODO: причесать код, вынести лишний функционал (в след)
// TODO: центрирование (в след задаче) +

// TODO: Фильтрация мест для выделения


// TODO: стейт хистори менеджер +
// TODO: выделение мест рамкой +
// TODO: рефакторинг по кодстайлу
// TODO: переключение режимов перетягивание + ведение + рамка по шифту / перетягивание + рамка по шифту
// TODO: причесать выделение/развыделение
// TODO: рефакторинг
// TODO: zoom сделать плавным и в центр экрана или в курсор при клике +
// TODO: минимальный зум для интерактивных мест

// TODO: после обновления чанка обновлять только часть снимка, а не весь снимок (доработки)
// TODO: после обновления чанка заменять только новые места, а не все (доработки)
// TODO: заменить на Map() объекты с местами (хз, проверим надо ли, по скорости вроде не выиграем, доработки)
// TODO: при отмене ctrl+z обновлять только часть снимка (доработки)
// TODO: установить мин макс зум

  import SchemeScaleControls from '@/components/scheme/SchemeScaleControls.vue'

  import { throttle } from '@/utils/throttle'

  import { useUndoRedo } from '@/composables/useUndoRedo'

  import SchemeModesControls from './SchemeModesControls.vue'
  import SchemeSeat from './SchemeSeat.vue'
  import Konva from 'konva'
  import RBush from 'rbush'
  import { ref, reactive, onMounted, computed, watch, inject, provide, onBeforeUnmount, nextTick } from 'vue'

  const seats = inject('schemeSeats')
  const seatsChunk = inject('schemeSeatsChunk')
  const isFullscreen = inject('isFullscreen', ref(false))
  const hallSchemeApp = inject('hallSchemeApp')

  const actualSeats = ref({})

  const emit = defineEmits([
    'changedSeatsState',
    'changeFullscreenMode',
  ])

  let spatialIndex = null

  // FIXME: временно для выделения мест
  const fillRects = ref({})

  const SNAPSHOT_ZOOM_THRESHOLD = 4 // Порог переключения на снимок
  const SEAT_SIZE = 20
  const SNAPSHOT_SCALE = 1 // Масштаб снимка
  const MIN_OBJECTS_ZOOM = 0.5 // Ниже этого масштаба показываем только снимок
  // XXX: для лужников не увеличивать
  // у неё размеры {minX: 80, minY: 80, maxX: 12706, maxY: 9290}
  // максимальный размер канваса в хроме - 16 384 × 16 384
  // TODO: переделать на тайлы при возможности

  // Паддинг для снимка чтобы не обрезался по краям
  const SNAPSHOT_PADDING = 40

  // Режим 2 - перетягивание вне схемы, выбор ведением
  const isDraggableMode = ref(false)
  const isMouseoverSelectingMode = ref(true)
  const isMouseoverSelecting = ref(false)
  const currentPlaceId = ref(null)

  // FIXME: костыль для корректной смены isDraggable при смене режимов
  watch([isDraggableMode, isMouseoverSelectingMode], ([val1, val2]) => {
    if (val2 && !val1) {
      isDraggable.value = true
    } else {
      isDraggable.value = false
    }
  })

  // режим перетягивание/рисование рамки выделения
  const isDraggable = ref(true)
  const isDragging = ref(false)
  const currentZoom = ref(1.3)
  const visibleSeatIds = ref([]) // ID видимых мест

  const stageRef = ref(null)
  const snapshotLayerRef = ref(null)
  const objectsLayerRef = ref(null)
  const snapshotImageRef = ref(null)

  // Буферный канвас - снимок
  const offscreenCanvas = ref(null)

  const snapshotConfig = reactive({
    image: null,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    filters: [Konva.Filters.Sharpen],
    sharpen: 1,
  })

  // Конфигурация сцены
  const stageConfig = reactive({
    width: 1000,
    height: 700,
    // draggable: isDraggable.value,
    // scaleX: currentZoom.value,
    // scaleY: currentZoom.value,
  })

  const getStageConfig = computed(() => ({
    ...stageConfig,
    scaleX: currentZoom.value,
    scaleY: currentZoom.value,
    draggable: isDraggable.value,
  }))

  // Конфиг для прямоугольников мест
  const getRectConfig = seat => ({
    x: seat.x,
    y: seat.y,
    width: SEAT_SIZE,
    height: SEAT_SIZE,
    fill: (() => {
      let color = '#ccc'

      if (seat.bg_color) {
        if (Array.isArray(seat.bg_color)) {
          color = seat.bg_color[0]
        } else {
          color = seat.bg_color
        }
      }

      if (seatsState.value.selectedSeats[seat.id]) {
        color = 'blue'
      }

      return color
    })(),
    stroke: (() => {
      let color = '#000'

      if (seat.border_color) {
        if (Array.isArray(seat.border_color)) {
          color = seat.border_color[0]
        } else {
          color = seat.border_color
        }
      }

      // FIXME: временно для выделения мест
      if (fillRects.value[seat.id]) {
        color = 'lightgreen'
      }

      return color
    })(),
    strokeWidth: 1,
    cornerRadius: 4,
    listening: true,
  })


  // Конфиг для текста мест
  const getTextConfigSeat = seat => {
    // HACK: для передачи параметров в нативную рисовалку
    // offsetX нельзя, совпадает в параметрами в v-rect

    const OFFSET_X = -2
    const OFFSET_Y = -1

    return {
      OFFSET_X,
      OFFSET_Y,
      x: seat.x + OFFSET_X,
      y: seat.y + OFFSET_Y,
      width: SEAT_SIZE,
      height: SEAT_SIZE,
      text: seat.seat,
      fontSize: 10,
      fill: '#000',
      align: 'right',
      verticalAlign: 'bottom',
      listening: false,
    }
  }

  // Конфиг для текста мест
  const getTextConfigRow = seat => {
    // HACK: для передачи параметров в нативную рисовалку
    // offsetX нельзя, совпадает в параметрами в v-rect

    const OFFSET_X = 1
    const OFFSET_Y = 2

    return {
      OFFSET_X,
      OFFSET_Y,
      x: seat.x + OFFSET_X,
      y: seat.y + OFFSET_Y,
      width: SEAT_SIZE,
      height: SEAT_SIZE,
      text: seat.row,
      fontSize: 8,
      fill: '#000',
      align: 'start',
      verticalAlign: 'top',
      listening: false, // События обрабатываются прямоугольником
    }
  }

  // Границы схемы
  const schemeBounds = reactive({
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  })

  // Рассчёт границ схемы
  const calculateSchemeBounds = () => {
    const seatsArray = Object.values(seats.value)

    if (seatsArray.length === 0) {
      schemeBounds.minX = 0
      schemeBounds.minY = 0
      schemeBounds.maxX = stageConfig.width
      schemeBounds.maxY = stageConfig.height

      return
    }

    schemeBounds.minX = Math.min(...seatsArray.map(s => s.x))
    schemeBounds.minY = Math.min(...seatsArray.map(s => s.y))
    schemeBounds.maxX = Math.max(...seatsArray.map(s => s.x + SEAT_SIZE))
    schemeBounds.maxY = Math.max(...seatsArray.map(s => s.y + SEAT_SIZE))
  }


  // Отрисовка мест на снимке
  const drawSeatOnBuffer = (ctx, seat, size) => {
    const offsetX = seat.x - schemeBounds.minX + SNAPSHOT_PADDING
    const offsetY = seat.y - schemeBounds.minY + SNAPSHOT_PADDING

    // Учитываем масштаб снимка при отрисовке
    const scaledSize = size * SNAPSHOT_SCALE
    const scaledX = offsetX * SNAPSHOT_SCALE
    const scaledY = offsetY * SNAPSHOT_SCALE

    const seatRectConfig = getRectConfig(seat)
    const seatTextConfigSeat = getTextConfigSeat(seat)
    const seatTextConfigRow = getTextConfigRow(seat)


    ctx.fillStyle = seatRectConfig.fill
    ctx.strokeStyle = seatRectConfig.stroke
    ctx.lineWidth = Number(SNAPSHOT_SCALE) * seatRectConfig.strokeWidth

    // Отрисовка места
    ctx.beginPath()

    ctx.roundRect(
      scaledX,
      scaledY,
      scaledSize,
      scaledSize,
      [seatRectConfig.cornerRadius * SNAPSHOT_SCALE],
    )

    ctx.fill()
    ctx.stroke()

    // Отрисовка номера места
    ctx.fillStyle = seatTextConfigSeat.fill
    ctx.font = `${seatTextConfigSeat.fontSize * SNAPSHOT_SCALE}px Arial` // Увеличиваем размер шрифта
    ctx.textAlign = seatTextConfigSeat.align
    ctx.textBaseline = seatTextConfigSeat.verticalAlign

    ctx.fillText(
      seat.seat,
      scaledX + scaledSize + seatTextConfigSeat.OFFSET_X * SNAPSHOT_SCALE,
      scaledY + scaledSize + seatTextConfigSeat.OFFSET_Y * SNAPSHOT_SCALE,
    )

    // Отрисовка номера ряда
    ctx.font = `${seatTextConfigRow.fontSize * SNAPSHOT_SCALE}px Arial` // Увеличиваем размер шрифта
    ctx.textAlign = seatTextConfigRow.align
    ctx.textBaseline = seatTextConfigRow.verticalAlign

    ctx.fillText(
      seat.row,
      scaledX + seatTextConfigRow.OFFSET_X * SNAPSHOT_SCALE,
      scaledY + seatTextConfigRow.OFFSET_Y * SNAPSHOT_SCALE,
    )
  }

  // Построение пространственного индекса (R-tree)
  const buildSpatialIndex = (seats, size) => {
    const tree = new RBush()

    const items = Object.values(seats).map(seat => ({
      minX: seat.x,
      minY: seat.y,
      maxX: seat.x + size,
      maxY: seat.y + size,
      id: seat.id,
    }))

    tree.load(items)

    return tree
  }

  // Обновление области снимка
  const updateSnapshotArea = (seat, seats, offscreenCanvas, spatialIndex, size) => {
    const ctx = offscreenCanvas.getContext('2d')
    const padding = size

    // Рассчёт области поиска в оригинальных координатах (без масштабирования)
    const searchArea = {
      minX: seat.x - padding,
      minY: seat.y - padding,
      maxX: seat.x + size + padding,
      maxY: seat.y + size + padding,
    }

    // Поиск объектов в области (в оригинальных координатах)
    const nearbySeats = spatialIndex.search(searchArea)

    // Область для очистки в масштабированных координатах с учетом паддинга
    const scaledUpdateArea = {
      minX: (searchArea.minX - schemeBounds.minX + SNAPSHOT_PADDING) * SNAPSHOT_SCALE,
      minY: (searchArea.minY - schemeBounds.minY + SNAPSHOT_PADDING) * SNAPSHOT_SCALE,
      maxX: (searchArea.maxX - schemeBounds.minX + SNAPSHOT_PADDING) * SNAPSHOT_SCALE,
      maxY: (searchArea.maxY - schemeBounds.minY + SNAPSHOT_PADDING) * SNAPSHOT_SCALE,
    }

    // Очистка области
    ctx.clearRect(
      scaledUpdateArea.minX,
      scaledUpdateArea.minY,
      scaledUpdateArea.maxX - scaledUpdateArea.minX,
      scaledUpdateArea.maxY - scaledUpdateArea.minY,
    )

    // Перерисовка объектов в области
    nearbySeats.forEach(({ id }) => {
      drawSeatOnBuffer(ctx, seats[id], size)
    })

    return scaledUpdateArea
  }


  // Инициализация снимка
  const initOffscreenCanvas = () => {
    calculateSchemeBounds()

    // Размеры с учетом паддинга
    const width = (schemeBounds.maxX - schemeBounds.minX + SNAPSHOT_PADDING * 2) * SNAPSHOT_SCALE
    const height = (schemeBounds.maxY - schemeBounds.minY + SNAPSHOT_PADDING * 2) * SNAPSHOT_SCALE

    offscreenCanvas.value = document.createElement('canvas')
    offscreenCanvas.value.width = width
    offscreenCanvas.value.height = height

    // Конфиг снимка с учетом паддинга
    snapshotConfig.x = schemeBounds.minX - SNAPSHOT_PADDING
    snapshotConfig.y = schemeBounds.minY - SNAPSHOT_PADDING
    snapshotConfig.width = schemeBounds.maxX - schemeBounds.minX + SNAPSHOT_PADDING * 2
    snapshotConfig.height = schemeBounds.maxY - schemeBounds.minY + SNAPSHOT_PADDING * 2
  }


  // Создание полного снимка
  const createFullSnapshot = () => {
    const ctx = offscreenCanvas.value.getContext('2d')
    ctx.clearRect(0, 0, offscreenCanvas.value.width, offscreenCanvas.value.height)

    Object.values(actualSeats.value).forEach(seat => {
      drawSeatOnBuffer(ctx, seat, SEAT_SIZE)
    })

    // Обновление снимка
    snapshotConfig.image = offscreenCanvas.value
    snapshotImageRef.value.getNode().image(offscreenCanvas.value)

    snapshotImageRef.value
      .getNode()
      .getLayer()
      .batchDraw()
  }

  // Обновление списка видимых мест
  const updateVisibleSeats = () => {
    if (currentZoom.value < MIN_OBJECTS_ZOOM) {
      visibleSeatIds.value = []

      return
    }

    if (!stageRef.value || !spatialIndex) {
      return
    }

    const stage = stageRef.value.getNode()
    const scale = stage.scaleX()

    const viewport = {
      x: -stage.x() / scale,
      y: -stage.y() / scale,
      width: stage.width() / scale,
      height: stage.height() / scale,
    }

    const visibleItems = spatialIndex.search({
      minX: viewport.x,
      minY: viewport.y,
      maxX: viewport.x + viewport.width,
      maxY: viewport.y + viewport.height,
    })

    visibleSeatIds.value = visibleItems.map(item => item.id)
  }

  // Throttle-обертка для пересчета видимых мест при частых изменениях зума
  const updateVisibleSeatsThrottled = throttle(() => {
    updateVisibleSeats()
  }, 16.7)

  // Обработчики событий
  const onDragStart = () => {
    if (!isDraggable.value) {
      return
    }

    isDragging.value = true

    if (currentZoom.value <= SNAPSHOT_ZOOM_THRESHOLD) {
      snapshotLayerRef.value.getNode().show()
      objectsLayerRef.value.getNode().hide()
    }
  }

  const onDragEnd = () => {
    if (!isDraggable.value) {
      return
    }

    isDragging.value = false

    if (currentZoom.value < MIN_OBJECTS_ZOOM) {
      snapshotLayerRef.value.getNode().show()
      objectsLayerRef.value.getNode().hide()
      visibleSeatIds.value = []

      return
    }

    snapshotLayerRef.value.getNode().hide()
    objectsLayerRef.value.getNode().show()
    updateVisibleSeats()
  }


  const doZoom = (newZoom, targetPoint = null) => {
    if (!stageRef.value) {
      return
    }

    if (newZoom < MIN_OBJECTS_ZOOM) {
      return
    }

    const stage = stageRef.value.getNode()
    const oldZoom = currentZoom.value

    let zoomPoint

    if (targetPoint) {
      // для зума в точку курсора
      zoomPoint = targetPoint
    } else {
      // Зум в центр экрана
      zoomPoint = {
        x: stage.width() / 2,
        y: stage.height() / 2,
      }
    }

    const virtualPoint = {
      x: (zoomPoint.x - stage.x()) / oldZoom,
      y: (zoomPoint.y - stage.y()) / oldZoom,
    }

    const newX = zoomPoint.x - virtualPoint.x * newZoom
    const newY = zoomPoint.y - virtualPoint.y * newZoom

    stage.x(newX)
    stage.y(newY)
    stage.scale({ x: newZoom, y: newZoom })
    currentZoom.value = newZoom
    stage.batchDraw()

    updateZoomDisplay()
  }

  const handleZoom = evt => {
    evt.preventDefault()

    if (!stageRef.value) {
      return
    }

    const stage = stageRef.value.getNode()
    const oldZoom = currentZoom.value
    const zoomFactor = evt.deltaY > 0 ? 0.95 : 1.05
    const newZoom = Math.min(Math.max(oldZoom * zoomFactor, 0.1), 20)

    const pointerPos = stage.getPointerPosition()

    // Если курсор над сценой - зум в точку курсора, иначе в центр
    const targetPoint = pointerPos || null

    doZoom(newZoom, targetPoint)

    updateVisibleSeatsThrottled()

    // Переключаем режимы отображения
    if (newZoom > SNAPSHOT_ZOOM_THRESHOLD) {
      snapshotLayerRef.value.getNode().hide()
      objectsLayerRef.value.getNode().show()
    } else if (isDragging.value) {
      snapshotLayerRef.value.getNode().show()
      objectsLayerRef.value.getNode().hide()
    }
  }

  const onSeatClick = seat => {
    // FIXME: заменить на нормальное обновление состояния
    // emit('changedSeatsState', {
    //   [seat.id]: seat,
    // })

    toggleSeatSelect(seat.id)

    StateHistoryManager.saveState(seatsState.value)

    // seatsState.value.selectedSeats[seat.id] = seat

    // FIXME: заменить на нормальное обновление состояния, тут для демо
    // fillRects.value[seat.id] = true

    // Обновление состояния места
    // seatsStore.updateSeatStatus(seat.id, 'selected')

    // Обновление UI в слое объектов
    objectsLayerRef.value.getNode().clearCache()

    // Частичное обновление снимка
    updateSnapshotArea(
      seat,
      actualSeats.value,
      offscreenCanvas.value,
      spatialIndex,
      SEAT_SIZE,
    )

    // Принудительное обновление снимка
    snapshotImageRef.value.getNode().image(offscreenCanvas.value)

    snapshotImageRef.value
      .getNode()
      .getLayer()
      .batchDraw()
  }

  const schemeMainRef = ref(null)

  // Реактивное обновление при изменении размеров окна
  const handleResize = () => {
    stageConfig.width = schemeMainRef.value?.offsetWidth
    stageConfig.height = schemeMainRef.value?.offsetHeight

    initOffscreenCanvas()
    createFullSnapshot()
    updateVisibleSeats()
  }


  // при выборе добавляем или удаляем место и индекс из seatsState
  // отправляем событие наружу с местами
  // при получении снаружи мест через замену целиком или через чанк, обновляем состояние с индексом


  // START: seats state
  const seatsState = ref({
    selectedSeats: {},
    // spatialIndex: null,
  })

  const resetSeatsState = () => {
    seatsState.value = {
      selectedSeats: {},
    // spatialIndex: null,
    }
  }

  const {
    StateHistoryManager,
    undoLastAction,
  } = useUndoRedo(seatsState, createFullSnapshot)
  // FIXME: заменить на перерисовку области снимка с выделенными местами из предыдущего сохранения

  // возвращает формат идентичный seatsState
  const getSeatsState = computed(() => {
    const seatsStateCopy = JSON.parse(JSON.stringify(seatsState.value))
    const seatsStateCopyRef = ref(seatsStateCopy)

    return seatsStateCopyRef
  })

  watch(() => getSeatsState.value, newVal => {
    console.log('getSeatsState.value : ', newVal)

    emit('changedSeatsState', newVal.value.selectedSeats)
  })

  const toggleSeatSelect = id => {
    if (seatsState.value.selectedSeats[id]) {
      delete seatsState.value.selectedSeats[id]
    } else {
      seatsState.value.selectedSeats[id] = seats.value[id]
    }
  }
  // END: seats state


  const centerStage = () => {
    if (!stageRef.value || !schemeBounds.maxX) {
      return
    }

    const stage = stageRef.value.getNode()
    const centerX = (schemeBounds.minX + schemeBounds.maxX) / 2
    const centerY = (schemeBounds.minY + schemeBounds.maxY) / 2

    const stageCenterX = stageConfig.width / 2
    const stageCenterY = stageConfig.height / 2

    // Вычисляем смещение для центрирования
    stage.x(stageCenterX - centerX * currentZoom.value)
    stage.y(stageCenterY - centerY * currentZoom.value)

    stage.batchDraw()
    updateVisibleSeats()
  }


  const zoomIn = () => {
    console.log('in')
    const oldZoom = currentZoom.value
    const zoomFactor = 1.2
    const newZoom = Math.min(oldZoom * zoomFactor, 20)
    doZoom(newZoom)
  }

  const zoomOut = () => {
    const oldZoom = currentZoom.value

    const zoomFactor = 0.8
    const newZoom = oldZoom * zoomFactor

    doZoom(newZoom)
  }

  const zoomReset = () => {
    const newZoom = 1.3
    console.log('reset')

    doZoom(newZoom)

    centerStage()
  }

  const handleFullScreen = () => {
    emit('changeFullscreenMode')
  }

  // Обновление отображения зума
  const updateZoomDisplay = () => {
    if (currentZoom.value < MIN_OBJECTS_ZOOM) {
      visibleSeatIds.value = []
      snapshotLayerRef.value.getNode().show()
      objectsLayerRef.value.getNode().hide()

      return
    }

    if (currentZoom.value > SNAPSHOT_ZOOM_THRESHOLD) {
      snapshotLayerRef.value.getNode().hide()
      objectsLayerRef.value.getNode().show()
    }

    updateVisibleSeats()
  }

  watch(seats, (newSeats, oldSeats) => {
    console.log('watch seats', newSeats)

    if (!newSeats) {
      return
    }

    actualSeats.value = newSeats

    resetSeatsState()
    StateHistoryManager.clearState()
    StateHistoryManager.saveState(seatsState.value)


    initOffscreenCanvas()

    centerStage()

    spatialIndex = buildSpatialIndex(seats.value, SEAT_SIZE)

    createFullSnapshot()
    updateVisibleSeats()
  }, { deep: true })

  watch(seatsChunk, newSeatsChunk => {
    console.log('watch newSeatsChunk', newSeatsChunk)

    if (!newSeatsChunk) {
      return
    }

    actualSeats.value = {
      ...actualSeats.value,
      ...newSeatsChunk,
    }

    resetSeatsState()

    StateHistoryManager.clearState()
    StateHistoryManager.saveState(seatsState.value)

    // initOffscreenCanvas()

    // spatialIndex = buildSpatialIndex(seats.value, SEAT_SIZE)
    // Обновление UI в слое объектов
    // objectsLayerRef.value.getNode().clearCache()
    createFullSnapshot()
    // updateVisibleSeats()
  }, { deep: true })

  watch(isFullscreen, () => {
    nextTick(() => {
      handleResize()

      nextTick(() => {
        updateVisibleSeats()
      })
    })
  })

  const onMouseEnter = id => {
    schemeMainRef.value.style.cursor = 'pointer'
  }

  const onMouseLeave = id => {
    schemeMainRef.value.style.cursor = 'default'
  }

  // Для выбора ведением
  const onSeatMouseDown = (placeId, evt) => {
    if (!isMouseoverSelectingMode.value) {
      return
    }

    isMouseoverSelecting.value = true
    isDraggable.value = false

    if (seatsState.value.selectedSeats[placeId]) {
      currentUnselectedSeats.value[placeId] = actualSeats.value[placeId]
    } else {
      currentSelectedSeats.value[placeId] = actualSeats.value[placeId]
    }

    currentPlaceId.value = String(placeId)
  }

  // Для выбора ведением

  const handleMouseMoveForMouseOverMode = () => {
    if (!isMouseoverSelectingMode.value || !isMouseoverSelecting.value) {
      return
    }

    const stageNode = stageRef.value.getNode()
    const pointerPos = stageNode.getPointerPosition()

    if (!pointerPos) {
      return
    }

    const node = stageNode.getIntersection(pointerPos)

    if (node?.name() === 'shape') {
      const placeId = node.id()

      if (placeId === currentPlaceId.value) {
        return
      }

      if (seatsState.value.selectedSeats[placeId]) {
        if (currentUnselectedSeats.value[placeId]) {
          delete currentUnselectedSeats.value[placeId]
        } else {
          currentUnselectedSeats.value[placeId] = actualSeats.value[placeId]
        }
      } else if (currentSelectedSeats.value[placeId]) {
        delete currentSelectedSeats.value[placeId]
      } else {
        currentSelectedSeats.value[placeId] = actualSeats.value[placeId]
      }

      currentPlaceId.value = placeId
    } else {
      currentPlaceId.value = null
    }
  }

  const handleMouseUpForMouseOverMode = () => {
    if (!isMouseoverSelectingMode.value) {
      return
    }

    isMouseoverSelecting.value = false
    isDraggable.value = true
    currentPlaceId.value = null

    if (!Object.keys(currentSelectedSeats.value).length && !Object.keys(currentUnselectedSeats.value).length) {
      return
    }

    const oldSelectedSeats = { ...seatsState.value.selectedSeats }

    for (const id in currentUnselectedSeats.value) {
      delete oldSelectedSeats[id]
    }

    // seatsState.value.selectedSeats = {
    //   ...oldSelectedSeats,
    // }
    // } else {
    seatsState.value.selectedSeats = {
      ...oldSelectedSeats,
      ...currentSelectedSeats.value,
    }
    // }

    StateHistoryManager.saveState(seatsState.value)
    currentSelectedSeats.value = {}
    currentUnselectedSeats.value = {}

    // FIXME: заменить на перерисовку области, а не всего снимка
    createFullSnapshot()
  }

  const addEventListenersForMousOverMode = () => {
    window.addEventListener('mousemove', handleMouseMoveForMouseOverMode)
    window.addEventListener('mouseup', handleMouseUpForMouseOverMode)
  }

  const removeEventListenersForMousOverMode = () => {
    window.removeEventListener('mousemove', handleMouseMoveForMouseOverMode)
    window.removeEventListener('mouseup', handleMouseUpForMouseOverMode)
  }

  // START: Режим перетягивания на shift / выделение без shift
  const isShiftKey = ref(false)
  const isMouseMiddle = ref(false)

  const isModeGrabbing = computed(() => isShiftKey.value || isMouseMiddle.value)

  watch(isModeGrabbing, val => {
    if (val && isDraggableMode.value) {
      isDraggable.value = true
    } else if (!val && isDraggableMode.value) {
      isDraggable.value = false
    }
  }, { immediate: true })


  const handleGrabbingKeyDown = evt => {
    if (evt.key === 'Shift') {
      isShiftKey.value = true
    }
  }

  const handleGrabbingKeyUp = evt => {
    if (evt.key === 'Shift') {
      isShiftKey.value = false
    }
  }

  const handleGrabbingMouseDown = evt => {
    if (evt.button === 1) {
      isMouseMiddle.value = true
    }
  }

  const handleGrabbingMouseUp = evt => {
    if (evt.button === 1) {
      isMouseMiddle.value = false
    }
  }

  const grabbingListenersAdd = () => {
    document.addEventListener('keydown', handleGrabbingKeyDown)
    document.addEventListener('keyup', handleGrabbingKeyUp)
    document.addEventListener('mousedown', handleGrabbingMouseDown)
    document.addEventListener('mouseup', handleGrabbingMouseUp)
  }

  const grabbingListenersRemove = () => {
    document.removeEventListener('keydown', handleGrabbingKeyDown)
    document.removeEventListener('keyup', handleGrabbingKeyUp)
    document.removeEventListener('mousedown', handleGrabbingMouseDown)
    document.removeEventListener('mouseup', handleGrabbingMouseUp)
  }


  // END: Режим перетягивания на shift / выделение без shift


  // START: рамка-выделение, режимы перетягивания/выделения
  const isUnselectionMode = ref(false)

  const currentSelectedSeats = ref({})

  const selectionRect = ref({
    fill: 'rgba(0,0,255,0.5)',
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  })


  const selectionRectProps = computed(() => ({
    fill: selectionRect.value.fill,
    visible: selectionRect.value.visible,
    x: Math.min(selectionRect.value.x1, selectionRect.value.x2),
    y: Math.min(selectionRect.value.y1, selectionRect.value.y2),
    width: Math.abs(selectionRect.value.x2 - selectionRect.value.x1),
    height: Math.abs(selectionRect.value.y2 - selectionRect.value.y1),
    // ref: selectionRectRef,
  }))

  const getRelativePointerPosition = stageNode => {
    if (!stageNode) {
      return { x: 0, y: 0 }
    }

    const pointerPos = stageNode.getPointerPosition()

    if (!pointerPos) {
      return { x: 0, y: 0 }
    }

    // Правильное преобразование с учетом трансформации
    const transform = stageNode.getAbsoluteTransform().copy()

    return transform.invert().point(pointerPos)
  }


  const onMouseDown = evt => {
    if (!isDraggableMode.value || !visibleSeatIds.value.length) {
      return
    }

    if (isDraggable.value) {
      return
    }

    const stageNode = stageRef.value.getNode()
    const pos = getRelativePointerPosition(stageNode)

    selectionRect.value = {
      ...selectionRect.value,
      visible: true,
      x1: pos.x,
      y1: pos.y,
      x2: pos.x,
      y2: pos.y,
    }
  }

  const onMouseMove = evt => {
    if (!isDraggableMode.value) {
      return
    }

    if (isDraggable.value || !selectionRect.value.visible) {
      return
    }

    const stageNode = stageRef.value.getNode()
    const pos = getRelativePointerPosition(stageNode)

    selectionRect.value = {
      ...selectionRect.value,
      x2: pos.x,
      y2: pos.y,
    }

    const box = {
      x: Math.min(selectionRect.value.x1, selectionRect.value.x2),
      y: Math.min(selectionRect.value.y1, selectionRect.value.y2),
      width: Math.abs(selectionRect.value.x2 - selectionRect.value.x1),
      height: Math.abs(selectionRect.value.y2 - selectionRect.value.y1),
    }

    // const ids = [];
    const selectedSeats = {}

    // Используем наш spatialIndex для поиска пересечений
    const candidateSeats = spatialIndex?.search({
      minX: box.x,
      minY: box.y,
      maxX: box.x + box.width,
      maxY: box.y + box.height,
    })

    // Проверяем точное пересечение
    candidateSeats.forEach(item => {
      const seatRect = {
        x: actualSeats.value[item.id].x,
        y: actualSeats.value[item.id].y,
        width: SEAT_SIZE,
        height: SEAT_SIZE,
      }

      if (rectanglesIntersect(box, seatRect)) {
        // ids.push(item.id);
        selectedSeats[item.id] = actualSeats.value[item.id]
      }
    })

    if (isUnselectionMode.value) {
      currentUnselectedSeats.value = { ...selectedSeats }
    } else {
      currentSelectedSeats.value = { ...selectedSeats }
    }

    // console.log("Selected IDs:", selectedSeats);
  }

  const rectanglesIntersect = (rect1, rect2) => rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y


  const onMouseUp = evt => {
    if (!isDraggableMode.value) {
      return
    }

    if (isDraggable.value) {
      selectionRect.value.visible = false

      return
    }

    if (!selectionRect.value.visible) {
      return
    }

    if (isUnselectionMode.value) {
      const oldSelectedSeats = { ...seatsState.value.selectedSeats }

      for (const id in currentUnselectedSeats.value) {
        delete oldSelectedSeats[id]
      }

      seatsState.value.selectedSeats = {
        ...oldSelectedSeats,
      }
    } else {
      seatsState.value.selectedSeats = {
        ...seatsState.value.selectedSeats,
        ...currentSelectedSeats.value,
      }
    }

    StateHistoryManager.saveState(seatsState.value)
    currentSelectedSeats.value = {}
    currentUnselectedSeats.value = {}

    // FIXME: заменить на перерисовку области, а не всего снимка
    createFullSnapshot()

    selectionRect.value.visible = false
  }


  // развыделение
  const currentUnselectedSeats = ref({})

  const handleUnselectionKeyDown = evt => {
    if (evt.key === 'Control' || evt.key === 'Meta') {
      isUnselectionMode.value = true
      selectionRect.value.fill = 'rgba(255,0,0,0.5)'
    }
  }

  const handleUnselectionKeyUp = evt => {
    if (evt.key === 'Control' || evt.key === 'Meta') {
      isUnselectionMode.value = false
      selectionRect.value.fill = 'rgba(0,0,255,0.5)'
    }
  }

  const unselectionListenersAdd = () => {
    document.addEventListener('keydown', handleUnselectionKeyDown)
    document.addEventListener('keyup', handleUnselectionKeyUp)
  }

  const unselectionListenersRemove = () => {
    document.removeEventListener('keydown', handleUnselectionKeyDown)
    document.removeEventListener('keyup', handleUnselectionKeyUp)
  }


  // END: рамка-выделение

  // START: зум для действий
  const ACTIVE_ZOOM = 1.3
  const ACTIVE_ZOOM_LISTENER_OPTS = { capture: true, passive: false }

  const handleMouseDownZoom = evt => {
    // проверка что клик не по кнопкам
    if (evt.target.closest('.scheme_main__controls')) {
      return
    }

    if (!stageRef.value || currentZoom.value >= ACTIVE_ZOOM) {
      return
    }

    const stage = stageRef.value.getNode()

    // Обновляем позицию указателя для Konva до изменения зума
    stage.setPointersPositions(evt)
    const pointerPos = stage.getPointerPosition()

    if (!pointerPos) {
      return
    }

    const oldZoom = currentZoom.value
    const newZoom = ACTIVE_ZOOM

    // Позиция мыши в виртуальных координатах схемы
    const virtualPoint = {
      x: (pointerPos.x - stage.x()) / oldZoom,
      y: (pointerPos.y - stage.y()) / oldZoom,
    }

    // Новое смещение
    const newX = pointerPos.x - virtualPoint.x * newZoom
    const newY = pointerPos.y - virtualPoint.y * newZoom

    stage.x(newX)
    stage.y(newY)
    // Ставим масштаб напрямую
    stage.scale({ x: newZoom, y: newZoom })
    currentZoom.value = newZoom

    if (newZoom < MIN_OBJECTS_ZOOM) {
      visibleSeatIds.value = []
      snapshotLayerRef.value.getNode().show()
      objectsLayerRef.value.getNode().hide()
    } else {
      updateVisibleSeats()
    }

    if (newZoom > SNAPSHOT_ZOOM_THRESHOLD) {
      snapshotLayerRef.value.getNode().hide()
      objectsLayerRef.value.getNode().show()
    }

    // Если включено перетягивание — запускаем drag вручную, чтобы избежать "скачка"
    if (isDraggable.value) {
      evt.preventDefault()
      evt.stopPropagation()

      // Снова фиксируем позицию указателя после трансформации и стартуем перетягивание
      stage.setPointersPositions(evt)
      stage.startDrag()
    }
  }

  const activeZoomListenersAdd = () => {
    nextTick(() => {
      console.log('stageRef : ', stageRef.value)
      console.log('schemeMainRef : ', schemeMainRef)
      console.log('schemeMainRef : ', schemeMainRef.value)


      schemeMainRef.value.addEventListener('mousedown', handleMouseDownZoom, ACTIVE_ZOOM_LISTENER_OPTS)
      schemeMainRef.value.addEventListener('touchstart', handleMouseDownZoom, ACTIVE_ZOOM_LISTENER_OPTS)
    })
  }

  const activeZoomListenersRemove = () => {
    schemeMainRef.value.removeEventListener('mousedown', handleMouseDownZoom, ACTIVE_ZOOM_LISTENER_OPTS)
    schemeMainRef.value.removeEventListener('touchstart', handleMouseDownZoom, ACTIVE_ZOOM_LISTENER_OPTS)
  }
  // END: зум для действий


  // START: Сброс выделения мест
  const clearSelectedSeatsHandler = () => {
    const previouslySelectedIds = Object.keys(seatsState.value.selectedSeats)

    if (!previouslySelectedIds.length) {
      return
    }

    seatsState.value.selectedSeats = {}
    currentSelectedSeats.value = {}
    currentUnselectedSeats.value = {}

    StateHistoryManager.saveState(seatsState.value)

    objectsLayerRef.value?.getNode()?.clearCache()

    if (offscreenCanvas.value && spatialIndex) {
      previouslySelectedIds.forEach(id => {
        const seat = actualSeats.value[id]

        if (!seat) {
          return
        }

        updateSnapshotArea(
          seat,
          actualSeats.value,
          offscreenCanvas.value,
          spatialIndex,
          SEAT_SIZE,
        )
      })

      snapshotImageRef.value?.getNode()?.image(offscreenCanvas.value)

      snapshotImageRef.value?.getNode()?.getLayer()
        ?.batchDraw()
    } else {
      createFullSnapshot()
    }
  }

  const registerClearSelectedSeatsListener = () => {
    if (!hallSchemeApp) {
      return
    }

    hallSchemeApp.on(hallSchemeApp.events.clearSelectedSeats, clearSelectedSeatsHandler)
  }
  // END: Сброс выделения мест

  onMounted(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    unselectionListenersAdd()
    grabbingListenersAdd()
    activeZoomListenersAdd()

    addEventListenersForMousOverMode()

    registerClearSelectedSeatsListener()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    unselectionListenersRemove()
    grabbingListenersRemove()
    activeZoomListenersRemove()

    removeEventListenersForMousOverMode()
  })

  // Пробрасываем константы в компонент через provide
  provide('SEAT_SIZE', SEAT_SIZE)
</script>

<template>
  <div ref="schemeMainRef" class="scheme_main">
    <v-stage
      ref="stageRef"
      class="stageRef"
      :config="getStageConfig"
      @mouse-down="onMouseDown"
      @mouse-up="onMouseUp"
      @mouse-move="throttle(onMouseMove, 16.7)()"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @wheel="evt => handleZoom(evt.evt)"
    >
      <!-- Слой снимка (для перемещения) -->
      <v-layer ref="snapshotLayerRef" :visible="false">
        <v-image ref="snapshotImageRef" :config="snapshotConfig" />
      </v-layer>

      <!-- Слой реальных объектов -->
      <v-layer ref="objectsLayerRef">
        <!-- Видимые места -->
        <SchemeSeat
          v-for="id in visibleSeatIds"
          :key="id"
          :seat="actualSeats[id]"
          :selected="!!seatsState.selectedSeats[id] || Boolean(currentSelectedSeats[id])"
          :unselected="!!currentUnselectedSeats[id]"
          :is-selection-mode="isMouseoverSelectingMode"
          @click="onSeatClick"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
          @mousedown="onSeatMouseDown(id, $event)"
          @touchstart="onSeatMouseDown(id, $event)"
        />
      </v-layer>

      <!-- Слой для рамки выделения -->
      <v-layer>
        <v-rect :config="selectionRectProps" />
      </v-layer>
    </v-stage>

    <div class="scheme_main__controls">
      <SchemeModesControls
        :is-grab-mode="isMouseoverSelectingMode"
        :is-cursor-mode="isDraggableMode"
        @click-grab="isMouseoverSelectingMode = true; isDraggableMode = false"
        @click-cursor="isDraggableMode = true; isMouseoverSelectingMode = false"
      />

      <SchemeScaleControls
        @click-zoom-in="zoomIn"
        @click-zoom-out="zoomOut"
        @click-zoom-reset="zoomReset"
        @click-full-screen="handleFullScreen"
      />
    </div>
  </div>
</template>

<style lang="less">
  .scheme_main {
    width: 100%;
    height: 100%;

    > div {
      width: 100%;
      height: 100%;
    }
  }

  .scheme_main__controls {
    position: absolute;
    left: 16px;
    top: 60px;
    width: initial !important;
    height: initial !important;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
