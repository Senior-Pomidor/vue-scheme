<script setup>

// XXX: на 45к мест перерисовка занимает 3 секунды

// TODO: внешний вид мест привести к одному (текст, бг, границы) +
// TODO: отрисовка на снимке с конфига места +
// TODO: курсор на нужный блок (не будем менять) +
// TODO: ховер +
// TODO: причесать код, вынести лишний функционал (в след)
// TODO: центрирование (в след задаче)


// TODO: стейт хистори менеджер +
// TODO: выделение мест рамкой
// TODO: рефакторинг

// TODO: после обновления чанка обновлять только часть снимка, а не весь снимок (доработки)
// TODO: после обновления чанка заменять только новые места, а не все (доработки)
// TODO: заменить на Map() объекты с местами (хз, проверим надо ли, по скорости вроде не выиграем, доработки)
// TODO: при отмене ctrl+z обновлять только часть снимка (доработки)


  import { useUndoRedo } from '@/composables/useUndoRedo'

  import SchemeSeat from './SchemeSeat.vue'
  import Konva from 'konva'
  import RBush from 'rbush'
  import { ref, reactive, onMounted, computed, watch, inject, provide, onUnmounted } from 'vue'

  const seats = inject('schemeSeats')
  const seatsChunk = inject('schemeSeatsChunk')

  const actualSeats = ref({})

  const emit = defineEmits([
    'changedSeatsState',
  ])

  let spatialIndex = null

  // FIXME: временно для выделения мест
  const fillRects = ref({})

  const SNAPSHOT_ZOOM_THRESHOLD = 4 // Порог переключения на снимок
  const SEAT_SIZE = 20
  const SNAPSHOT_SCALE = 1 // Масштаб снимка
  // XXX: для лужников не увеличивать
  // у неё размеры {minX: 80, minY: 80, maxX: 12706, maxY: 9290}
  // максимальный размер канваса в хроме - 16 384 × 16 384
  // TODO: переделать на тайлы при возможности

  // Паддинг для снимка чтобы не обрезался по краям
  const SNAPSHOT_PADDING = 40

  const isDragging = ref(false)
  const currentZoom = ref(1)
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
    draggable: true,
    scaleX: currentZoom.value,
    scaleY: currentZoom.value,
  })

  // Конфиг для прямоугольников мест
  const getRectConfig = seat =>
    // console.log(seat)

    ({
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

  // Обработчики событий
  const onDragStart = () => {
    isDragging.value = true

    if (currentZoom.value <= SNAPSHOT_ZOOM_THRESHOLD) {
      snapshotLayerRef.value.getNode().show()
      objectsLayerRef.value.getNode().hide()
    }
  }

  const onDragEnd = () => {
    isDragging.value = false
    snapshotLayerRef.value.getNode().hide()
    objectsLayerRef.value.getNode().show()
    updateVisibleSeats()
  }

  const handleZoom = newZoom => {
    currentZoom.value = newZoom
    stageConfig.scaleX = newZoom
    stageConfig.scaleY = newZoom

    if (newZoom > SNAPSHOT_ZOOM_THRESHOLD) {
      snapshotLayerRef.value.getNode().hide()
      objectsLayerRef.value.getNode().show()
    } else if (isDragging.value) {
      snapshotLayerRef.value.getNode().show()
      objectsLayerRef.value.getNode().hide()
    }

    updateVisibleSeats()
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


  const onMouseEnter = id => {
    schemeMainRef.value.style.cursor = 'pointer'
  }

  const onMouseLeave = id => {
    schemeMainRef.value.style.cursor = 'default'
  }

  onMounted(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  // Пробрасываем константы в компонент через provide
  provide('SEAT_SIZE', SEAT_SIZE)
</script>

<template>
  <div ref="schemeMainRef" class="scheme_main">
    <v-stage
      ref="stageRef"
      class="stageRef"
      :config="stageConfig"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @wheel="evt => handleZoom(currentZoom * (evt.evt.deltaY > 0 ? 0.95 : 1.05))"
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
          :selected="!!seatsState.selectedSeats[id]"
          @click="onSeatClick"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<style>
.scheme_main {
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;
  }
}
</style>
