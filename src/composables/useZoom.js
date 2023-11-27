import { ref, unref, onMounted } from 'vue'
import { throttle } from '@/utils/throttle'

/**
 * @param { Object } options
 * @param { Element } options.$zoomWrapper - зумящийся блок
 * @param { Object } options.controls -
 * @param { Element } options.controls.$controlsZoomIn
 * @param { Element } options.controls.$controlsZoomOut
 * @param { Element } options.controls.$controlsZoomReset
 * @param {{ min: Float; max: Number; }} options.minMaxZoom
 */
function useZoom({
  $zoomWrapper,
  controls: {
    $controlsZoomIn,
    $controlsZoomOut,
    $controlsZoomReset,
  },
  minMaxZoom: {
    min = 0.2,
    max = 2.2,
  },
  initialZoomScale = 1,
}) {
  const zoomScale = ref(initialZoomScale)

  // величина увеличения/уменьшения масштаба
  const zoomDelta = 0.1

  const changeZoom = (operator, speed = 1) => {
    const newZoomScale = ref(zoomScale.value)

    switch (operator) {
      case '+':
        newZoomScale.value += zoomDelta * speed
        break
      case '-':
        newZoomScale.value -= zoomDelta * speed
        break
      default:
        newZoomScale.value = 1
    }

    zoomScale.value = Math.max(min, Math.min(max, newZoomScale.value))
  }

  const setControlsListeners = () => {
    if (unref($controlsZoomIn.value)) {
      unref($controlsZoomIn).addEventListener('click', () => {
        changeZoom('+')
      })
    }

    if (unref($controlsZoomOut)) {
      unref($controlsZoomOut).addEventListener('click', () => {
        changeZoom('-')
      })
    }

    if (unref($controlsZoomReset)) {
      unref($controlsZoomReset).addEventListener('click', () => {
        changeZoom()
      })
    }
  }

  const mouseWheelZoomHandler = throttle(evt => {
    const delta = evt.deltaY
    const direction = -1

    if (delta * direction > 0) {
      // Уменьшение масштаба при прокрутке вниз
      changeZoom('+', 0.2)
    } else {
      // Уменьшение масштаба при прокрутке вниз
      changeZoom('-', 0.2)
    }
  }, 0)

  onMounted(() => {
    setControlsListeners()

    if (unref($zoomWrapper)) {
      unref($zoomWrapper).addEventListener('wheel', mouseWheelZoomHandler)
    }
  })

  return {
    zoomScale,
  }
}

export { useZoom }
