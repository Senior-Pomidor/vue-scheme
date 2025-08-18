import { throttle } from '@/utils/throttle'

import { ref, unref, onMounted } from 'vue'

/**
 * @param { Object } options
 * @param { Element } options.$zoomWrapper - зумящийся блок
 * @param {{ min: Float; max: Number; }} options.minMaxZoom
 */
function useZoom({
  $zoomWrapper,
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

  const zoom = {
    in() {
      changeZoom('+')
    },
    out() {
      changeZoom('-')
    },
    reset() {
      changeZoom()
    },
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
    if (unref($zoomWrapper)) {
      unref($zoomWrapper).addEventListener('wheel', mouseWheelZoomHandler)
    }
  })

  return {
    zoomScale,
    zoom,
  }
}

export { useZoom }
