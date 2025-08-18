const getBoundingRight = elem => elem.getBoundingClientRect().left + elem.getBoundingClientRect().width
const getBoundingBottom = elem => elem.getBoundingClientRect().top + elem.getBoundingClientRect().height


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
    // doSelection()
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
