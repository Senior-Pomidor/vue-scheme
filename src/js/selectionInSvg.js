import { throttle } from '@/utils/throttle'

export const selectionInSvg = (
  mapPlaceSize,
  places_result,
  currentSelectedSeats,
) => {
  const $selectionArea = document.querySelector('#elSvgMapWrapper') // svg
  const $selectionFrameRect = $selectionArea.querySelector('#elSelectionFrameRect')
  let startCoords
  let endCoords

  places_result = $selectionArea.querySelectorAll('.seat')

  let isMouseDown = false


  const getCoordsInArea = evt => {
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


  const getRightX = elem => elem.coord_x + mapPlaceSize
  const getBottomY = elem => elem.coord_y + mapPlaceSize

  const isItemInSelectionArea = $item => (
    $item.coord_x >= startCoords.x && $item.coord_x <= endCoords.x
    || getRightX($item) >= startCoords.x && getRightX($item) <= endCoords.x
  )
    &&
    (
      $item.coord_y >= startCoords.y && $item.coord_y <= endCoords.y
      || getBottomY($item) >= startCoords.y && getBottomY($item) <= endCoords.y
    )

  const selectItemsInArea = () => {
    places_result.forEach(place => {
      if (isItemInSelectionArea(place)) {
        currentSelectedSeats.value[place.id] = true
      }
    })
  }

  const toThrottleSelectItemsInArea = throttle(selectItemsInArea, 100)

  const mouseDownListener = evt => {
    isMouseDown = true
    $selectionFrameRect.setAttribute('visibility', 'visible')

    startCoords = getCoordsInArea(evt)

    $selectionFrameRect.setAttribute('width', 0)
    $selectionFrameRect.setAttribute('height', 0)

    $selectionFrameRect.setAttribute('x', startCoords.x)
    $selectionFrameRect.setAttribute('y', startCoords.y)

    // $selectionFrameRect.setAttribute('x', startCoords.x / $selectionArea.getAttribute('zoomScale'))
    // $selectionFrameRect.setAttribute('y', startCoords.y / $selectionArea.getAttribute('zoomScale'))
  }

  const mouseMoveListener = evt => {
    if (!isMouseDown) {
      return
    }

    endCoords = getCoordsInArea(evt)

    $selectionFrameRect.setAttribute('width', endCoords.x - startCoords.x)
    $selectionFrameRect.setAttribute('height', endCoords.y - startCoords.y)

    // $selectionFrameRect.setAttribute('width', (endCoords.x - startCoords.x) / $selectionArea.getAttribute('zoomScale'))
    // $selectionFrameRect.setAttribute('height', (endCoords.y - startCoords.y) / $selectionArea.getAttribute('zoomScale'))

    toThrottleSelectItemsInArea()
  }

  const mouseUpListener = evt => {
    isMouseDown = false

    // $selectionFrameRect.setAttribute('visibility', 'hidden')
  }

  $selectionArea.addEventListener('mousedown', mouseDownListener)
  $selectionArea.addEventListener('mousemove', mouseMoveListener)
  document.addEventListener('mouseup', mouseUpListener)
}
