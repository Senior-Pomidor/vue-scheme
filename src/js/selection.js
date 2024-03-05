const selection = () => {
  const $selectionArea = document.querySelector('#selectionArea')
  const $selectionFrame = document.querySelector('#selectionFrame')
  const $selectionItems = document.querySelectorAll('.seat')

  let isMouseDown = false
  let startX
  let startY
  // const selectedItemsIds = []
  // const selectedItems = []

  const getOffsetRight = elem => elem.offsetLeft + elem.offsetWidth
  const getOffsetBottom = elem => elem.offsetTop + elem.offsetHeight

  const coords = evt => {
    let posX = 0
    let posY = 0

    if (evt.pageX || evt.pageY) {
      posX = evt.pageX
      posY = evt.pageY
    } else if (evt.clientX || evt.clientY) {
      posX = evt.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft

      posY = evt.clientY + document.body.scrollTop
        + document.documentElement.scrollTop
    }

    return [posX, posY]
  }

  const selectItemsInArea = (x1, y1, x2, y2) => {
    if (x1 === x2 || y1 === y2) {
      return
    }

    if (x1 > x2) {
      [x1, x2] = [x2, x1]
    }

    if (y1 > y2) {
      [y1, y2] = [y2, y1]
    }

    $selectionItems.forEach($item => {
      const isItemInSelectionArea =
        (
          $item.offsetLeft >= x1 && $item.offsetLeft <= x2
          || getOffsetRight($item) >= x1 && getOffsetRight($item) <= x2
        )
        &&
        (
          $item.offsetTop >= y1 && $item.offsetTop <= y2
          || getOffsetBottom($item) >= y1 && getOffsetBottom($item) <= y2
        )

      // FIXME: Говнокод, надо исправить
      if (isItemInSelectionArea) {
        // selectedItems.push($item)
        // selectedSeats.value[$item.id] = true
        currentSelectedSeats.value[$item.id] = true
        // $item.classList.add('_selected')
      } else if (!openedSeats.value[$item.id]) {
        if (!selectedSeats.value[$item.id]) {
          // console.log($item.id)
          if (isShiftKeyRequired.value && !isShiftKey.value) {
            // selectedSeats.value[$item.id] = false
            currentSelectedSeats.value[$item.id] = false
          } else if (!isShiftKeyRequired.value || isShiftKeyRequired.value && isShiftKey.value) {
            currentSelectedSeats.value[$item.id] = false
          }
          // $item.classList.remove('_selected')
        } else if (isShiftKeyRequired.value && !isShiftKey.value) {
          selectedSeats.value[$item.id] = false
          currentSelectedSeats.value[$item.id] = false
        }
      }
    })
  }

  const handleMouseDown = evt => {
    isMouseDown = true;

    [startX, startY] = coords(evt)
  }

  const handleMouseMove = evt => {
    let x1=0
    let x2=0
    let y1=0
    let y2=0

    let mouseXY = coords(evt)

    x1 = startX
    y1 = startY;

    [x2, y2] = mouseXY

    if (x1 === x2 || y1 === y2) {
      return
    }

    if (x1 > x2) {
      [x1, x2] = [x2, x1]
    }

    if (y1 > y2) {
      [y1, y2] = [y2, y1]
    }

    if (isMouseDown) {
      $selectionFrame.style.top = `${y1}px`
      $selectionFrame.style.left = `${x1}px`
      $selectionFrame.style.width = `${x2 - x1}px`
      $selectionFrame.style.height = `${y2 - y1}px`
      $selectionFrame.style.visibility = isMouseDown ? 'visible' : 'hidden'

      mouseXY = coords(evt)
      selectItemsInArea(startX, startY, mouseXY[0], mouseXY[1])
    }
  }

  const handleMouseUp = evt => {
    isMouseDown = false

    if (isShiftKeyRequired.value && isShiftKey.value || !isShiftKeyRequired.value) {
      selectedSeats.value = { ...selectedSeats.value, ...currentSelectedSeats.value }
    }

    const mouseXY = coords(evt)

    selectItemsInArea(startX, startY, mouseXY[0], mouseXY[1])

    $selectionFrame.style.visibility = isMouseDown ? 'visible' : 'hidden'
  }

  document.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

export { selection }
