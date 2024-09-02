<script setup>
  // components
  import SchemeSeat from '../../components/scheme/SchemeSeat.vue'
  import VLoader from '../../components/ui/VLoader.vue'

  // vue
  import { ref, computed, onMounted, watch, inject, nextTick } from 'vue'

  // utils
  import { throttle } from '../../utils/throttle'

  // composables
  import { useUndoRedo } from '../../composables/useUndoRedo'
  import { useZoom } from '../../composables/useZoom'

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
    // 'clearSelectedSeats',
  ])

  const elSvgMapTranslateCoords = ref({
    x: 0,
    y: 0,
  })

  // данные для мест на карте
  // const mapPlaces = ref([])

  // элемент свг карта
  const elSvgMapWrapper = ref()
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

  const isModeGrabbing = computed(() => isMouseDown.value && isSpaceKey.value || isMouseMiddle.value)

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
    currentSelectedSeats.value = {}
    seatsState.value.selectedSeats = {}

    StateHistoryManager.clearState()
    StateHistoryManager.saveState(seatsState.value)

    // clearSelectedSeats()
  }, { deep: true })

  const isModeUnSelection = computed(() => !isModeGrabbing.value && isControlKey.value)
  const isModeSelection = computed(() => !isModeGrabbing.value && !isModeUnSelection.value)

  // настройки рамки-выделения на схеме
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

  const getGrabbingClass = computed(() => {
    if (currentAction.value === 'grabbing') {
      if (isMouseDown.value || isMouseMiddle.value) {
        return '_grabbing'
      }

      return '_grab'
    }

    return ''
  })

  const addGlobalEventListeners = () => {
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

    document.addEventListener('mouseup', evt => {
      isMouseDown.value = false
      isMouseMiddle.value = false
    })
  }

  const handleClick = id => {
    if (!isModeSelection.value) {
      return
    }

    if (seatsState.value.selectedSeats[id] || currentSelectedSeats.value[id]) {
      delete currentSelectedSeats.value[id]
      delete seatsState.value.selectedSeats[id]
    } else {
      currentSelectedSeats.value[id] = getQuotaSeats.value[id]
      seatsState.value.selectedSeats[id] = getQuotaSeats.value[id]
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
          delete currentSelectedSeats.value[$item.id]

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
      }
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

    const mouseMoveListener = evt => {
      if (currentAction.value !== 'selection') {
        return
      }

      endCoordsInArea = getCoordsInSvgMapWrapper(evt)

      if (endCoordsInArea.x == startCoords.x || endCoordsInArea.y == startCoords.y) {
        return
      }

      throttle(drawSelectionFrame($selectionFrameRect, startCoords, endCoordsInArea), 16.7)
      throttle(doSelection(), 16.7)
    }

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

      $selectionFrameRect.setAttribute('visibility', 'hidden')
    }

    $selectionArea.addEventListener('mousedown', mouseDownListener)
    $selectionArea.addEventListener('mousemove', mouseMoveListener)
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
          }

          continue
        }

        if (seatsState.value.selectedSeats[$item.id]) {
          currentUnSelectedSeats.value[$item.id] = getQuotaSeats.value[$item.id]
        }
      }
    }

    const confirmUnselection = () => {
      if (!Object.keys(currentUnSelectedSeats.value).length) {
        return
      }

      for (const id in currentUnSelectedSeats.value) {
        if (currentUnSelectedSeats.value[id]) {
          delete seatsState.value.selectedSeats[id]
          delete currentSelectedSeats.value[id]
        }
      }

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

    const mouseMoveListener = evt => {
      if (currentAction.value !== 'unselection' || !isMouseDown.value) {
        return
      }

      endCoordsInArea = getCoordsInSvgMapWrapper(evt)

      throttle(drawSelectionFrame($selectionFrameRect, startCoords, endCoordsInArea), 16.7)
      throttle(doUnSelection(), 16.7)
    }

    const mouseUpListener = evt => {
      confirmUnselection()

      if (currentAction.value === 'unselection') {
        currentAction.value = ''
      }

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

    $selectionArea.addEventListener('mousedown', mouseDownListener)
    $selectionArea.addEventListener('mousemove', mouseMoveListener)
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

  const grabbing = () => {
    const $elGrabbingWraper = document.querySelector('.elSvgMapWrapper')
    let previousTranslateCoords = { ...elSvgMapTranslateCoords.value }

    // коорднаты начала перетягивания
    const grabStartCoords = {
      x: 0,
      y: 0,
    }

    // коорднаты конца перетягивания
    const grabEndCoords = {
      x: 0,
      y: 0,
    }

    document.addEventListener('keydown', evt => {
      // evt.preventDefault()

      // if (evt.key === ' ') {
      //   isSpaceKey.value = true
      // }

      if (evt.key === 'Shift') {
        isShiftKey.value = true
      }

      if (isShiftKey.value && !currentAction.value) {
        currentAction.value = 'grabbing'
      }
    })

    document.addEventListener('keyup', evt => {
      // evt.preventDefault()

      if (evt.key === ' ') {
        isSpaceKey.value = false
      }

      if (!isMouseDown.value) {
        currentAction.value = ''
      }
    })

    $elGrabbingWraper.addEventListener('mousedown', evt => {
      evt.preventDefault()

      if (isMouseMiddle.value && !currentAction.value || isMouseDown.value && isSpaceKey.value) {
        currentAction.value = 'grabbing'
      }

      if (currentAction.value !== 'grabbing') {
        return
      }

      grabStartCoords.x = evt.clientX
      grabStartCoords.y = evt.clientY

      grabEndCoords.x = evt.clientX
      grabEndCoords.y = evt.clientY
    })

    document.addEventListener('mousemove', evt => {
      if (currentAction.value === 'grabbing' && (isMouseDown.value || isMouseMiddle.value)) {
        grabEndCoords.x = evt.clientX
        grabEndCoords.y = evt.clientY

        elSvgMapTranslateCoords.value.x = previousTranslateCoords.x + (grabEndCoords.x - grabStartCoords.x)
        elSvgMapTranslateCoords.value.y = previousTranslateCoords.y + (grabEndCoords.y - grabStartCoords.y)
      }
    })

    document.addEventListener('mouseup', () => {
      if (currentAction.value === 'grabbing') {
        currentAction.value = ''
      }

      previousTranslateCoords = { ...elSvgMapTranslateCoords.value }
    })
  }


  // START: tooltip
  import VTooltip from '../../components/ui/VTooltip.vue'

  const isTooltip = ref(false)
  const tooltipHtml = ref('')
  const tooltipParent = ref('')

  const onSeatHover = (seat) => {
    if (!seat.tooltip) {
      return
    }

    tooltipHtml.value = seat.tooltip?.html || ''
    tooltipParent.value = `[id="${seat.id}"]`

    isTooltip.value = true
  }

  const onSeatHoverLeave = () => {
    isTooltip.value = false
  }
  // END: tooltip

  // FIXME: START: костыль для очистки выделения
  const hallSchemeApp = inject('hallSchemeApp')

  hallSchemeApp.on(hallSchemeApp.events['clearSelectedSeats'], () => {
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

      StateHistoryManager.saveState(seatsState.value)
    }, 100)
  })
</script>

<template>
  <div class="scheme-main">
    <VLoader v-show="loading" />
    <!-- {{ Object.keys(getQuotaSeats).length }} -->
    <svg
      id="elSvgMapWrapper"
      ref="elSvgMapWrapper"
      class="elSvgMapWrapper"
      :class="getGrabbingClass"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <g id="elSvgMap__inner" :transform="`scale(${zoomScale})`">
        <g
          id="elSvgMap"
          ref="elSvgMap"
          :transform="`translate(${elSvgMapTranslateCoords.x || '0'}, ${elSvgMapTranslateCoords.y || '0'})`"
        >
          <SchemeSeat
            v-for="mapPlace in getSeats"
            :id="mapPlace.id"
            :key="'place-' + mapPlace.id"
            ref="$schemePlaces"
            :class="{
              _selected: seatsState.selectedSeats[mapPlace.id] || currentSelectedSeats[mapPlace.id],
              _disabled: !getQuotaSeats[mapPlace.id],
              _unselected: currentUnSelectedSeats[mapPlace.id],
            }"
            :seat="mapPlace"
            :seat-width="props.config.seat_width || 20"
            :seat-height="props.config.seat_height || 20"
            @click="handleClick(mapPlace.id)"
            @mouseover="onSeatHover(mapPlace)"
            @mouseleave="onSeatHoverLeave"
            />
            <!-- :selectable="!!getQuotaSeats[mapPlace.id]" -->
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
        v-bind="getSelectionRectSettings"
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
      @mouseenter="isTooltip = true"
      @mouseleave="onSeatHoverLeave"
    >
      <div v-html="tooltipHtml"></div>
    </VTooltip>
  </div>
</template>

<style lang="less" scoped>
@import url('./SchemeMain.less');
</style>
