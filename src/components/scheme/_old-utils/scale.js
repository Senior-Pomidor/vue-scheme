// START: scale
import { useZoom } from '@/composables/useZoom'

import SchemeScaleControls from '../../components/scheme/SchemeScaleControls.vue'

const { zoomScale, zoom } = useZoom({
  $zoomWrapper: elSvgMapWrapper,
  minMaxZoom: {
    min: 0.3,
    max: 2.2,
  },
})

const scale = computed(() => `scale(${zoomScale.value})`)

// END: scale
