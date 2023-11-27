import { throttle } from '@/utils/throttle'

const zoom = () => {
  // элемент, который будет зумиться
  const elZoomable = document.querySelector('.elSvgMapWrapper')

  // кнопки зума
  const elControlsZoomIn = document.querySelector('.controls__zoom-in')
  const elControlsZoomOut = document.querySelector('.controls__zoom-out')
  const elControlsZoomReset = document.querySelector('.controls__zoom-reset')

  // минимальный и максимальный зум
  const minMaxZoom = {
    min: 0.5,
    max: 2,
  }

  let defaultZoomScale = 1

  // величина увеличения/уменьшения масштаба
  const zoomDelta = 0.1

  // новый масштаб
  let newScale = defaultZoomScale

  // увеличение/уменьшение масштаба
  const doZoom = operator => {
    switch (operator) {
      case '+':
        newScale += zoomDelta
        break
      case '-':
        newScale -= zoomDelta
        break
      default:
        newScale = 1
    }

    defaultZoomScale = Math.max(minMaxZoom.min, Math.min(minMaxZoom.max, newScale))
    newScale = defaultZoomScale
  }

  elControlsZoomIn.onclick = () => {
    doZoom('+')
  }

  elControlsZoomOut.onclick = () => {
    doZoom('-')
  }

  elControlsZoomReset.onclick = () => {
    doZoom()
  }

  const mouseWheelZoomHandler = throttle(evt => {
    const delta = evt.deltaY

    if (delta > 0) {
      // Уменьшение масштаба при прокрутке вниз
      doZoom('+')
    } else {
      // Уменьшение масштаба при прокрутке вниз
      doZoom('-')
    }
  }, 100)

  elZoomable.addEventListener('wheel', mouseWheelZoomHandler)
}

export { zoom }
