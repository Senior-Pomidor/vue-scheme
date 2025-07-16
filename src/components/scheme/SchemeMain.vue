<script setup>
// XXX: места сразу через стейт менеджер, undo/redo

  import SchemeScaleControls from '@/components/scheme/SchemeScaleControls.vue'
  import VLoader from '@/components/ui/VLoader.vue'

  import { onMounted, onUnmounted, inject } from 'vue'

  // const props = defineProps({
  //   config: {
  //     type: Object,
  //     default: () => ({}),
  //   },

  //   seats: {
  //     type: Object,
  //     default: () => ({}),
  //   },

  //   seatsChunk: {
  //     type: Object,
  //     default: () => ({}),
  //   },

  //   filters: {
  //     type: Object,
  //     default: () => ({}),
  //   },
  // });

  // const filters = {
  //   attrs: {
  //     active: 'true',
  //   },
  //   prices: {
  //     min: 0,
  //     max: 1000,
  //   },
  // }

  const seats = inject('schemeSeats')
  const seatsChunk = inject('schemeSeatsChunk')
  const config = inject('schemeConfig')
  const filters = inject('selectionFilters')
  const loading = inject('loading')

  const emit = defineEmits([
    'changedSeatsState',
    'unselectSeats',
    'changeFullscreenMode',
    'selectSeats',
  // 'clearSelectedSeats',
  ])

  // START: fullscreen
  // const isFullscreen = inject('isFullscreen')

  // const onFullScreenBtnClick = () => {
  //   emit('changeFullscreenMode')
  // }
  // END: fullscreen

  onMounted(() => {
  //
  })

  onUnmounted(() => {
  //
  })
</script>

<template>
  <div class="scheme_main">
    <VLoader v-show="loading" />

    <SchemeScaleControls class="scheme_main__controls" />
  </div>
</template>

<style lang="less" scoped>
@import url("./SchemeMain.less");
</style>
