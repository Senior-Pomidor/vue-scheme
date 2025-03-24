<script setup>
  // components
  import SchemeSeat from '@/components/scheme/SchemeSeat.vue'
  import VLoader from '@/components/ui/VLoader.vue'

  // vue
  import { ref, computed, onMounted, onUnmounted, watch, inject, nextTick } from 'vue'

  // utils
  import { throttle } from '@/utils/throttle'
  import { debounce } from '@/utils/debounce'

  // composables
  import { useUndoRedo } from '@/composables/useUndoRedo'
  import { useZoom } from '@/composables/useZoom'

  const props = defineProps({
    config: {
      type: Object,
      default: () => ({}),
    },

    seats: {
      type: [Array, Object],
      default: () => [],
    },

    filters: {
      type: Object,
      default: () => ({}),
    },
  })
  // const filters = {
  //   attrs: {
  //     active: 'true',
  //   },
  //   prices: {
  //     min: 0,
  //     max: 1000,
  //   },
  // }

  const throttleFrequency = 16.7
  const loading = inject('loading')

  // места на схеме
  const $schemePlaces = ref([])
  const getSeats = computed(() => props.seats)

  // const checkCond = seat => seat.active == true

  const getQuotaSeats = computed(() => {
    const seats = {}

    for (const id in props.seats) {
      const seat = props.seats[id]
      let isValid = true


      if (!Object.keys(props.filters).length) {
        seats[id] = seat
        continue
      }

      // HACK: временное решение для фильтров выделения
      // FIXME: переписать этот говнокод при первой же возможности
      for (const filter in props.filters) {
        switch (filter) {
          case 'attrs':
            for (const attr in props.filters.attrs) {
              if (Array.isArray(props.filters.attrs[attr])) {
                if (props.filters.attrs[attr].length && !props.filters.attrs[attr].includes(seat[attr])) {
                  isValid = false

                  break
                }
              } else if (typeof props.filters.attrs[attr] === 'object') {
                for (const key in props.filters.attrs[attr]) {

                  // есть хоть один true вариант
                  if (JSON.stringify(props.filters.attrs[attr][key]) === JSON.stringify(seat[attr][key])) {
                    isValid = true

                    break
                  }

                  isValid = false
                }
              } else if (JSON.stringify(props.filters.attrs[attr]) !== JSON.stringify(seat[attr])) {
                isValid = false

                break
              }
            }
            break

          case 'prices':
            if (props.filters.prices.min && seat.price < props.filters.prices.min
              || props.filters.prices.max && seat.price > props.filters.prices.max) {
              isValid = false

              break
            }
            break
          default:
            break
        }
      }

      if (isValid) {
        seats[id] = seat
      }
    }

    return seats
  })

  const emit = defineEmits([
    'changedSeatsState',
    'unselectSeats',
    'changeFullscreenMode',
    'selectSeats',
    // 'clearSelectedSeats',
  ])

  const elSvgMapTranslateCoords = ref({
    x: 0,
    y: 0,
  })

  watch(elSvgMapTranslateCoords, newCoords => {
    if (!newCoords) {
      return
    }

    // targetEl.style.transform = `translate(${currentX}px, ${currentY}px)`


    elSvgMap.value.style.transform = `translate(${newCoords.x || '0'}px, ${newCoords.y || '0'}px)`
    // elSvgMap.value.setAttribute('transform', `translate(${newCoords.x || '0'}, ${newCoords.y || '0'})`)
  }, { deep: true })

  // данные для мест на карте
  // const mapPlaces = ref([])

  let isSvgMapWrapperListeners = false
  // элемент свг карта
  const elSvgMapWrapper = ref()
  watch(elSvgMapWrapper, newVal => {
    if (!newVal || isSvgMapWrapperListeners) {
      return
    }

    elSvgMapWrapper.value.addEventListener('mousedown', evt => {
      if (evt.button === 0) {
        isMouseDown.value = true
      }
    })

    elSvgMapWrapper.value.addEventListener('mousedown', evt => {
      if (evt.button === 1) {
        isMouseMiddle.value = true
      }
    })
  }, { immediate: true })




  // элемент слой-обёртка мест на свг карте
  const elSvgMap = ref()
  // нарисованная область выделения
  const elSelectionFrameRect = ref()

  // текущие выделенные места
  const currentSelectedSeats = ref({})

  // текущие места для снятия выделения
  const currentUnSelectedSeats = ref({})

  const openedSeats = ref({})

  // состояние мест на карте
  const seatsState = ref({
    selectedSeats: {},
  })

  // возвращает формат идентичный seatsState
  const getSeatsState = computed(() => {
    const seatsStateCopy = JSON.parse(JSON.stringify(seatsState.value))
    const seatsStateCopyRef = ref(seatsStateCopy)

    return seatsStateCopyRef
  })

  watch(() => getSeatsState.value, newVal => {
    emit('changedSeatsState', newVal.value.selectedSeats)
  })


  const {
    StateHistoryManager,
    undoLastAction,
  } = useUndoRedo(seatsState)

  // настройки
  const isShiftKey = ref(false)
  const isSpaceKey = ref(false)
  const isControlKey = ref(false)
  const isMouseDown = ref(false)
  const isMouseMiddle = ref(false)

  // const isModeGrabbing = computed(() => isMouseDown.value && isSpaceKey.value || isMouseMiddle.value)

  const isModeGrabbing = computed(() => isShiftKey.value || isMouseMiddle.value)

  const currentAction = ref('')
  const currentActionNames = ref({
    selection: 'Выделение мест',
    unselection: 'Отмена выделения мест',
    grabbing: 'Перемещение схемы',
  })

  // const clearSelectedSeats = () => {
  //   currentSelectedSeats.value = {}
  //   seatsState.value.selectedSeats = {}

  //   StateHistoryManager.clearState()
  //   StateHistoryManager.saveState(seatsState.value)
  // }

  watch(() => getSeats.value, newVal => {
    // Удаляем класс _selected у всех выбранных мест
    // for (const id in seatsState.value.selectedSeats) {
    //   const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)
    //   if (seatElement) {
    //     seatElement.classList.remove('_selected')
    //   }
    // }

    currentSelectedSeats.value = {}
    seatsState.value.selectedSeats = {}

    StateHistoryManager.clearState()
    StateHistoryManager.saveState(seatsState.value)

    // clearSelectedSeats()
  }, { deep: true })

  const isModeUnSelection = computed(() => !isModeGrabbing.value && isControlKey.value)
  const isModeSelection = computed(() => !isModeGrabbing.value && !isModeUnSelection.value)

  // настройки рамки-выделения на схеме
  // TODO: выделить selection/unselection mode в отдельную переменную
  // чтобы изменение других модов не обновляло значение computed
  const getSelectionRectSettings = computed(() => {
    const fill = currentAction.value === 'unselection'
      ? 'rgba(239, 89, 89, .26)'
      : 'rgba(106, 229, 251, 0.34)'
    const stroke = currentAction.value === 'unselection'
      ? '#d00404'
      : '#68aafb'

    return {
      fill,
      stroke,
    }
  })

  watch(() => getSelectionRectSettings.value, (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      elSelectionFrameRect.value.setAttribute('fill', newVal.fill)
      elSelectionFrameRect.value.setAttribute('stroke', newVal.stroke)
    }
  })

  const getGrabbingClass = computed(() => {
    if (currentAction.value === 'grabbing') {
      if (isMouseDown.value || isMouseMiddle.value) {
        return '_grabbing'
      }

      return '_grab'
    }

    return ''
  })

  watch(() => getGrabbingClass.value, (newVal, oldVal) => {
    if (oldVal) {
      elActionLayer.value.classList.remove(oldVal)
    }

    if (newVal) {
      elActionLayer.value.classList.add(newVal)
    }
  })

  const toggleSeatSelect = id => {
    const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

    if (seatsState.value.selectedSeats[id] || currentSelectedSeats.value[id]) {
      delete currentSelectedSeats.value[id]
      delete seatsState.value.selectedSeats[id]

      if (seatElement) {
        seatElement.classList.remove('_selected')
      }
    } else {
      currentSelectedSeats.value[id] = getQuotaSeats.value[id]
      seatsState.value.selectedSeats[id] = getQuotaSeats.value[id]

      if (seatElement) {
        seatElement.classList.add('_selected')
      }
    }

    currentSelectedSeats.value = {}

    StateHistoryManager.saveState(seatsState.value)
  }

  const drawSelectionFrame = (elFrame, startCoords, endCoords) => {
    const actualCoords = {
      startX: startCoords.x,
      startY: startCoords.y,
      endX: endCoords.x,
      endY: endCoords.y,
    }

    if (actualCoords.startX > actualCoords.endX) {
      [actualCoords.startX, actualCoords.endX] = [actualCoords.endX, actualCoords.startX]
    }

    if (actualCoords.startY > actualCoords.endY) {
      [actualCoords.startY, actualCoords.endY] = [actualCoords.endY, actualCoords.startY]
    }

    elFrame.setAttribute('x', actualCoords.startX)
    elFrame.setAttribute('y', actualCoords.startY)

    elFrame.setAttribute('width', actualCoords.endX - actualCoords.startX)
    elFrame.setAttribute('height', actualCoords.endY - actualCoords.startY)
  }

  const selectElementInArea = () => {
    // исходный набор seats
    // куда сохранять targetSeats
  }


  const getBoundingRight = elem => elem.getBoundingClientRect().left + elem.getBoundingClientRect().width
  const getBoundingBottom = elem => elem.getBoundingClientRect().top + elem.getBoundingClientRect().height

  const selectionSeatsFromArea = () => {
    const $selectionArea = elSvgMapWrapper.value // svg
    const $selectionFrameRect = elSelectionFrameRect.value // рамка-выделение

    let startCoords
    let endCoordsInArea

    const getCoordsInSvgMapWrapper = evt => {
      const point = DOMPoint.fromPoint($selectionArea)

      point.x = evt.clientX
      point.y = evt.clientY

      const cursorPoint = point
        .matrixTransform($selectionArea
          .getScreenCTM()
          .inverse())
      // {
      //   "x": 390,
      //   "y": 172.0078125,
      //   "z": 0,
      //   "w": 1
      // }

      return cursorPoint || {}
    }

    // выделение элементов, пересекающихся с рамкой-выделением
    // проверяются координаты относительно окна браузера
    const doSelection = () => {
      // console.log(213)
      if (!$schemePlaces.value) {
        return
      }

      const selectionFrame = elSelectionFrameRect.value

      if (!selectionFrame) {
        return
      }

      const actualCoords = {
        startX: selectionFrame.getBoundingClientRect().x,
        startY: selectionFrame.getBoundingClientRect().y,
        endX: selectionFrame.getBoundingClientRect().x + selectionFrame.getBoundingClientRect().width,
        endY: selectionFrame.getBoundingClientRect().y + selectionFrame.getBoundingClientRect().height,
      }

      if (actualCoords.startX > actualCoords.endX) {
        [actualCoords.startX, actualCoords.endX] = [actualCoords.endX, actualCoords.startX]
      }

      if (actualCoords.startY > actualCoords.endY) {
        [actualCoords.startY, actualCoords.endY] = [actualCoords.endY, actualCoords.startY]
      }

      // выеление мест внутри рамки
      for (let $item of $schemePlaces.value) {
        $item = $item.$el || $item

        if (!getQuotaSeats.value[$item.id]) {
          continue
        }

        // тормозит
        // const placeObj = props.seats.find(place => place.id == $item.id)
        // const isValidPlace = $item?.getAttribute('selectable') == 'true'

        // if (!isValidPlace) {
        //   continue
        // }

        const isItemInSelectionArea =
          (
            $item.getBoundingClientRect().x >= actualCoords.startX && $item.getBoundingClientRect().x <= actualCoords.endX
            || getBoundingRight($item) >= actualCoords.startX && getBoundingRight($item) <= actualCoords.endX
          )
          &&
          (
            $item.getBoundingClientRect().y >= actualCoords.startY && $item.getBoundingClientRect().y <= actualCoords.endY
            || getBoundingBottom($item) >= actualCoords.startY && getBoundingBottom($item) <= actualCoords.endY
          )

        // снятие выделения с мест,
        // которые были выделены в последней области
        // и в итоге не попали в неё
        if (!isItemInSelectionArea) {
          if (currentSelectedSeats.value[$item.id]) {
            delete currentSelectedSeats.value[$item.id]
            // Удаляем класс _selected, если место было в currentSelectedSeats, но вышло из области выделения
            $item.classList.remove('_selected')
          }
          continue
        }

        // прерывание если место уже открыто
        if (openedSeats.value[$item.id]) {
          continue
        }

        // для выделения с shift могут быть другие условия
        // поэтому лучше пока отдельным условием
        if (seatsState.value.selectedSeats[$item.id]) {
          continue
        }

        currentSelectedSeats.value[$item.id] = getQuotaSeats.value[$item.id]
        // Добавляем класс _selected при выделении
        $item.classList.add('_selected')
      }
    }

    const confirmSelection = () => {
      if (!Object.keys(currentSelectedSeats.value).length) {
        return
      }

      // вызывает ошибку даже на 1000 мест
      // localhost/:1 Uncaught (in promise) Maximum recursive updates exceeded in component <SchemeMain>. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.
      // for (const id in currentSelectedSeats.value) {
      //   seatsState.value.selectedSeats[id] = currentSelectedSeats.value[id]
      // }

      // вместо кода выше, меняем реактивное свойство seatsState только 1 раз
      const tempSeats = {
        ...seatsState.value.selectedSeats,
        ...currentSelectedSeats.value,
      }

      seatsState.value.selectedSeats = tempSeats

      StateHistoryManager.saveState(seatsState.value)

      emit('selectSeats', currentSelectedSeats.value)

      currentSelectedSeats.value = {}
    }

    const mouseDownListener = evt => {
      if (currentAction.value || !isMouseDown.value) {
        return
      }

      // установка режима выделения
      currentAction.value = 'selection'

      $selectionFrameRect.setAttribute('visibility', 'visible')

      startCoords = getCoordsInSvgMapWrapper(evt)
      endCoordsInArea = getCoordsInSvgMapWrapper(evt)

      $selectionFrameRect.setAttribute('x', startCoords.x)
      $selectionFrameRect.setAttribute('y', startCoords.y)

      $selectionFrameRect.setAttribute('width', 0)
      $selectionFrameRect.setAttribute('height', 0)
    }

    const mouseMoveListener = throttle(evt => {
      if (currentAction.value !== 'selection') {
        return
      }

      endCoordsInArea = getCoordsInSvgMapWrapper(evt)

      if (endCoordsInArea.x == startCoords.x || endCoordsInArea.y == startCoords.y) {
        return
      }

      drawSelectionFrame($selectionFrameRect, startCoords, endCoordsInArea)
      doSelection()
    }, throttleFrequency)

    const mouseUpListener = evt => {
      if (currentAction.value !== 'selection') {
        return
      }

      currentAction.value = ''

      if (endCoordsInArea?.x == startCoords?.x || endCoordsInArea?.y == startCoords?.y) {
        return
      }

      if (Object.keys(currentSelectedSeats.value).length) {
        seatsState.value.selectedSeats = { ...seatsState.value.selectedSeats, ...currentSelectedSeats.value }

        currentSelectedSeats.value = {}
        StateHistoryManager.saveState(seatsState.value)
      }

      doSelection()
      confirmSelection()
      $selectionFrameRect.setAttribute('visibility', 'hidden')
    }

    let isSelectionAreaListeners = false
    watch(() => $selectionArea, newVal => {
      if (!newVal || isSelectionAreaListeners) {
        return
      }

      isSelectionAreaListeners = true

      $selectionArea.addEventListener('mousedown', mouseDownListener)
      $selectionArea.addEventListener('mousemove', mouseMoveListener)
    }, { immediate: true })

    // $selectionArea.addEventListener('mousedown', mouseDownListener)
    // $selectionArea.addEventListener('mousemove', mouseMoveListener)
    document.addEventListener('mouseup', mouseUpListener)
  }

  const unSelectionSeatsFromArea = () => {
    const $selectionArea = elSvgMapWrapper.value // svg
    const $selectionFrameRect = elSelectionFrameRect.value // рамка-выделение

    let startCoords
    let endCoordsInArea

    const getCoordsInSvgMapWrapper = evt => {
      const point = DOMPoint.fromPoint($selectionArea)

      point.x = evt.clientX
      point.y = evt.clientY

      const cursorPoint = point
        .matrixTransform($selectionArea
          .getScreenCTM()
          .inverse())

      return cursorPoint || {}
    }

    // выделение элементов, пересекающихся с рамкой-выделением
    // проверяются координаты относительно окна браузера
    const doUnSelection = () => {
      const selectionFrame = elSelectionFrameRect.value

      if (!selectionFrame) {
        return
      }

      const actualCoords = {
        startX: selectionFrame.getBoundingClientRect().x,
        startY: selectionFrame.getBoundingClientRect().y,
        endX: selectionFrame.getBoundingClientRect().x + selectionFrame.getBoundingClientRect().width,
        endY: selectionFrame.getBoundingClientRect().y + selectionFrame.getBoundingClientRect().height,
      }

      if (actualCoords.startX > actualCoords.endX) {
        [actualCoords.startX, actualCoords.endX] = [actualCoords.endX, actualCoords.startX]
      }

      if (actualCoords.startY > actualCoords.endY) {
        [actualCoords.startY, actualCoords.endY] = [actualCoords.endY, actualCoords.startY]
      }

      // выбор мест внутри рамки
      for (let $item of $schemePlaces.value) {
        $item = $item.$el || $item

        const isItemInSelectionArea =
          (
            $item.getBoundingClientRect().x >= actualCoords.startX && $item.getBoundingClientRect().x <= actualCoords.endX
            || getBoundingRight($item) >= actualCoords.startX && getBoundingRight($item) <= actualCoords.endX
          )
          &&
          (
            $item.getBoundingClientRect().y >= actualCoords.startY && $item.getBoundingClientRect().y <= actualCoords.endY
            || getBoundingBottom($item) >= actualCoords.startY && getBoundingBottom($item) <= actualCoords.endY
          )

        // прерывание если место уже открыто
        if (openedSeats.value[$item.id]) {
          continue
        }

        if (!isItemInSelectionArea) {
          if (currentUnSelectedSeats.value[$item.id]) {
            delete currentUnSelectedSeats.value[$item.id]
            // Возвращаем класс _selected, если место было в currentUnSelectedSeats, но вышло из области снятия выделения
            if (seatsState.value.selectedSeats[$item.id]) {
              $item.classList.add('_selected')
            }
          }

          continue
        }

        if (seatsState.value.selectedSeats[$item.id]) {
          currentUnSelectedSeats.value[$item.id] = getQuotaSeats.value[$item.id]
          // Удаляем класс _selected при добавлении в список мест для снятия выделения
          $item.classList.remove('_selected')
        }
      }
    }

    const confirmUnselection = () => {
      if (!Object.keys(currentUnSelectedSeats.value).length) {
        return
      }

      let tempStateSelectedSeats = {
        ...seatsState.value.selectedSeats,
      }

      let tempCurrentSelectedSeats = {
        ...currentSelectedSeats.value,
      }

      for (const id in currentUnSelectedSeats.value) {
        if (currentUnSelectedSeats.value[id]) {
          delete tempStateSelectedSeats[id]
          delete tempCurrentSelectedSeats[id]

          // Удаляем класс _selected при отмене выделения
          const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)
          if (seatElement) {
            seatElement.classList.remove('_selected')
          }
        }
      }

      seatsState.value.selectedSeats = tempStateSelectedSeats
      currentSelectedSeats.value = tempCurrentSelectedSeats

      StateHistoryManager.saveState(seatsState.value)

      emit('unselectSeats', currentUnSelectedSeats.value)

      currentUnSelectedSeats.value = {}
    }

    const mouseDownListener = evt => {
      if (currentAction.value !== 'unselection') {
        return
      }

      $selectionFrameRect.setAttribute('visibility', 'visible')

      startCoords = getCoordsInSvgMapWrapper(evt)

      $selectionFrameRect.setAttribute('x', startCoords.x)
      $selectionFrameRect.setAttribute('y', startCoords.y)

      $selectionFrameRect.setAttribute('width', 0)
      $selectionFrameRect.setAttribute('height', 0)
    }

    const mouseMoveListener = throttle(evt => {
      if (currentAction.value !== 'unselection' || !isMouseDown.value) {
        return
      }

      endCoordsInArea = getCoordsInSvgMapWrapper(evt)

      drawSelectionFrame($selectionFrameRect, startCoords, endCoordsInArea)
      // TODO: для оптимизации места не выбираются во время рисования рамки
      // только после завершения рисования
      doUnSelection()
    }, throttleFrequency)

    const mouseUpListener = evt => {
      if (currentAction.value !== 'unselection') {
        return
      }

      currentAction.value = ''

      doUnSelection()
      confirmUnselection()

      $selectionFrameRect.setAttribute('visibility', 'hidden')
    }

    document.addEventListener('keydown', evt => {
      if (evt.key === 'Control' || evt.key === 'Meta') {
        isControlKey.value = true
      }

      if (isControlKey.value && !currentAction.value) {
        currentAction.value = 'unselection'
      }
    })

    document.addEventListener('keyup', evt => {
      if (evt.key === 'Control' || evt.key === 'Meta') {
        isControlKey.value = false
      }

      if (!isMouseDown.value) {
        currentAction.value = ''
      }
    })

    let isSelectionAreaListeners = false
    watch(() => $selectionArea, newVal => {
      if (!newVal || isSelectionAreaListeners) {
        return
      }

      isSelectionAreaListeners = true

      $selectionArea.addEventListener('mousedown', mouseDownListener)
      $selectionArea.addEventListener('mousemove', mouseMoveListener)
    }, { immediate: true })

    // $selectionArea.addEventListener('mousedown', mouseDownListener)
    // $selectionArea.addEventListener('mousemove', mouseMoveListener)
    document.addEventListener('mouseup', mouseUpListener)
  }

  // START: zoom
  import SchemeScaleControls from '../../components/scheme/SchemeScaleControls.vue'

  const { zoomScale, zoom } = useZoom({
    $zoomWrapper: elSvgMapWrapper,
    minMaxZoom: {
      min: 0.3,
      max: 2.2,
    },
  })

  const scale = computed(() => `scale(${zoomScale.value})`)

  const isFullscreen = inject('isFullscreen')

  const onFullScreenBtnClick = () => {
    emit('changeFullscreenMode')
  }

  const centerSvgMap = () => {
    elSvgMapTranslateCoords.value.x = elSvgMapWrapper.value.getBoundingClientRect().width / 2
      - elSvgMap.value.getBBox().width / 2

    elSvgMapTranslateCoords.value.y = elSvgMapWrapper.value.getBoundingClientRect().height / 2
      - elSvgMap.value.getBBox().height / 2
  }
  // END: zoom

  const elActionLayer = ref()

  const grabbing = () => {
    const targetEl = document.querySelector('#elSvgMap')
    let isDragging = false
    let offsetX, offsetY
    let currentX = 0, currentY = 0

    // отображение/скрытие action_layer
    watch(isModeGrabbing, (newVal) => {
      if (!elActionLayer.value) return

      // Просто добавляем/удаляем класс без изменения стилей
      if (newVal) {
        elActionLayer.value.classList.add('_visible')
        currentAction.value = 'grabbing'
      } else {
        elActionLayer.value.classList.remove('_visible')
        currentAction.value = ''
      }
    }, { immediate: true })

    // Следим за изменением elActionLayer для добавления обработчиков
    watch(elActionLayer, (newVal) => {
      if (!newVal) return

      const actionLayer = newVal

      actionLayer.addEventListener('mousedown', (e) => {
        if (!isModeGrabbing.value) return

        isDragging = true
        const rect = targetEl.getBoundingClientRect()
        offsetX = e.clientX - rect.left
        offsetY = e.clientY - rect.top
      })

      actionLayer.addEventListener('mousemove', (e) => {
        if (!isDragging || !isModeGrabbing.value) return

        currentX = e.clientX - offsetX
        currentY = e.clientY - offsetY

        requestAnimationFrame(() => {
          targetEl.style.transform = `translate(${currentX}px, ${currentY}px)`
        })
      })

      document.addEventListener('mouseup', () => {
        isDragging = false
      })
    }, { immediate: true })
  }

  // START: tooltip
  import VTooltip from '../../components/ui/VTooltip.vue'

  const isTooltip = ref(false)
  const tooltipHtml = ref('')
  const tooltipParent = ref('')

  const openSeatTooltip = seat => {
    if (!seat?.tooltip?.html) {
      return
    }

    tooltipHtml.value = seat.tooltip.html || ''
    tooltipParent.value = `[id="${seat.id}"]`

    isTooltip.value = true
  }

  const closeSeatTooltip = () => {
    isTooltip.value = false
  }
  // END: tooltip

  // START: scheme global listeners
  const onSvgSchemeClick = evt => {
    if (!isModeSelection.value) {
      return
    }

    const $seat = evt.target.closest('g[data-seat="true"]')

    if (!$seat) {
      return
    }

    const id = $seat.dataset.id

    if (!id || !getQuotaSeats.value[id]) {
      return
    }

    toggleSeatSelect(id)
  }

  // TODO: отрефакторить работу с селекторами
  const handleSvgSchemeMouseMove = evt => {
    const $seat = evt.target.closest('g[data-seat="true"]')
    const $schemeInner = evt.target.closest('g[data-svg-inner="true"]')
    const $tooltipBody = evt.target.closest('*[data-tooltip-body="true"]')
    const seatId = $seat?.dataset?.id
    const seatTooltipHTML = getQuotaSeats.value[seatId]?.tooltip?.html

    if (!$schemeInner && !$tooltipBody) {
      closeSeatTooltip()

      return
    }

    if ($seat || seatId || seatTooltipHTML || !$tooltipBody) {
      closeSeatTooltip()

      nextTick(() => {
        openSeatTooltip(getSeats.value[seatId])
      })
    }
  }

  const handleSvgSchemeMouseMoveDebounced = debounce(handleSvgSchemeMouseMove, 300)
  // END: scheme global listeners

  // START: document global listeners
  const addGlobalEventListeners = () => {
    document.addEventListener('mousemove', handleSvgSchemeMouseMoveDebounced)

    document.addEventListener('keydown', evt => {
      if (evt.key === 'Shift') {
        isShiftKey.value = true
      }
    })

    document.addEventListener('keyup', evt => {
      if (evt.key === 'Shift') {
        isShiftKey.value = false
      }
    })

    // перенёс в вотчер, потому что в админке не успевает прогрузиться схема
    // и лисенер вешается на undefined
    // elSvgMapWrapper.value.addEventListener('mousedown', evt => {
    //   if (evt.button === 0) {
    //     isMouseDown.value = true
    //   }
    // })

    // elSvgMapWrapper.value.addEventListener('mousedown', evt => {
    //   if (evt.button === 1) {
    //     isMouseMiddle.value = true
    //   }
    // })

    document.addEventListener('mouseup', evt => {
      isMouseDown.value = false
      isMouseMiddle.value = false
    })

    // document.addEventListener('mousemove', handleSvgSchMouseMove)
  }

  // TODO: доделать остальные
  const removeGlobalEventListeners = () => {
    document.removeEventListener('mousemove', handleSvgSchemeMouseMoveDebounced)
  }
  // END: document global listeners


  // FIXME: START: костыль для очистки выделения
  const hallSchemeApp = inject('hallSchemeApp')

  hallSchemeApp.on(hallSchemeApp.events['clearSelectedSeats'], () => {
    // Удаляем класс _selected у всех выбранных мест
    for (const id in seatsState.value.selectedSeats) {
      const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)
      if (seatElement) {
        seatElement.classList.remove('_selected')
      }
    }

    seatsState.value.selectedSeats = {}
    StateHistoryManager.clearState()
  })
  // FIXME: END: костыль для очистки выделения

  const isFirstRender = ref(true)
  watch(() => props.seats, () => {
    if (!isFirstRender.value) {
      return
    }

    isFirstRender.value = false
    nextTick(centerSvgMap)
  })

  onMounted(() => {
    // таймаут для прогрузки свг карты с местами
    setTimeout(() => {
      addGlobalEventListeners()
      selectionSeatsFromArea()
      unSelectionSeatsFromArea()
      grabbing()

      // Устанавливаем класс _selected для всех уже выбранных мест
      nextTick(() => {
        for (const id in seatsState.value.selectedSeats) {
          const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)
          if (seatElement) {
            seatElement.classList.add('_selected')
          }
        }
      })

      StateHistoryManager.saveState(seatsState.value)
    }, 100)
  })

  onUnmounted(() => {
    removeGlobalEventListeners()
  })
</script>

<template>
  <div class="scheme-main">
    <VLoader v-show="loading" />

    <!-- скрытие и появление не влияет на производительность -->
    <!-- влияет текст в месте -->
    <div
      class="action_layer"
      ref="elActionLayer"
    ></div>

    <!-- :class="{_select_mode: currentAction === 'selection' || currentAction === 'unselection'}" -->
    <svg
      id="elSvgMapWrapper"
      ref="elSvgMapWrapper"
      class="elSvgMapWrapper scheme-main__svg"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      @click="onSvgSchemeClick"
    >
      <g
        id="elSvgMap__inner"
        :transform="scale"
        data-svg-inner="true"
        >
        <g
          id="elSvgMap"
          ref="elSvgMap"
        >
          <SchemeSeat
            v-for="mapPlace in getSeats"
            :id="mapPlace.id"
            :key="'place-' + mapPlace.id"
            ref="$schemePlaces"
            data-seat="true"
            :data-id="mapPlace.id"
            :seat="mapPlace"
            :seat-width="props.config.seat_width || 20"
            :seat-height="props.config.seat_height || 20"
            :class="{
              _disabled: !getQuotaSeats[mapPlace.id],
              _unselected: currentUnSelectedSeats[mapPlace.id],
            }"
          />

          <!-- :class="{
              _selected: seatsState.selectedSeats[mapPlace.id] || currentSelectedSeats[mapPlace.id],
              _disabled: !getQuotaSeats[mapPlace.id],
              _unselected: currentUnSelectedSeats[mapPlace.id],
            }" -->
        </g>
      </g>

      <!-- рамка - выделение области -->
      <rect
        id="elSelectionFrameRect"
        ref="elSelectionFrameRect"
        :width="10"
        :height="10"
        :x="0"
        :y="0"
        rx="3"
        ry="3"
        visibility="hidden"
        stroke-width="1"
        stroke-dasharray="1 4"
        stroke-linecap="round"
        fill="rgba(106, 229, 251, 0.34)"
        stroke="#68aafb"
      />
    </svg>

    <SchemeScaleControls
      class="scheme-main__controls"
      :is-fullscreen="isFullscreen"
      @click-zoom-in="zoom.in"
      @click-zoom-out="zoom.out"
      @click-zoom-reset="centerSvgMap(); zoom.reset()"
      @click-full-screen="onFullScreenBtnClick"
    />

    <VTooltip
      v-show="isTooltip"
      :show="isTooltip"
      :position="'horizontal'"
      :parent-selector="tooltipParent"
      data-tooltip-body="true"
    >
      <div v-html="tooltipHtml"></div>
    </VTooltip>
  </div>
</template>

<style lang="less" scoped>
  @import url('./SchemeMain.less');

  .action_layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transform: translate3d(-100%, -100%, 0);
    // background-color: rgba(255, 255, 255, .3);

    &._visible {
      transform: translate3d(0, 0, 0);
    }

    &._grab {
      // cursor: grab;
      cursor: move;
    }

    &._grabbing {
      // cursor: grabbing;
      cursor: move;
    }
  }

  .scheme-main__svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<style lang="less">
  .seat:not(._disabled) {
    .hover({
      rect {
        fill: @blue;
      }
    })
  }
</style>
