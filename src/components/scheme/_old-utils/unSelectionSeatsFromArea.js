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

          // Удаляем класс _unselected, если место вышло из области снятия выделения
          $item.classList.remove('_unselected')
        }

        continue
      }

      if (seatsState.value.selectedSeats[$item.id]) {
        currentUnSelectedSeats.value[$item.id] = getQuotaSeats.value[$item.id]
        // Удаляем класс _selected при добавлении в список мест для снятия выделения
        $item.classList.remove('_selected')
        // Добавляем класс _unselected
        $item.classList.add('_unselected')
      }
    }
  }

  const confirmUnselection = () => {
    if (!Object.keys(currentUnSelectedSeats.value).length) {
      return
    }

    const tempStateSelectedSeats = {
      ...seatsState.value.selectedSeats,
    }

    const tempCurrentSelectedSeats = {
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
          // Удаляем класс _unselected после завершения операции отмены выделения
          seatElement.classList.remove('_unselected')
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

    // ??? Убедимся, что все классы _unselected удалены после завершения операции
    for (let $item of $schemePlaces.value) {
      $item = $item.$el || $item
      $item.classList.remove('_unselected')
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
