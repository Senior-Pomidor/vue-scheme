<script setup>
  // components
  import SchemeMain from '@/components/scheme/SchemeMain.vue'

  // vue
  import { inject } from 'vue'

  const emit = defineEmits([
    'changedSeatsState',
    'unselectSeats',
  ])

  const schemeSeats = inject('schemeSeats')
  const schemeConfig = inject('schemeConfig')
  const selectionFilters = inject('selectionFilters')

  const changedSeatsStateHandler = state => {
    emit('changedSeatsState', state)
  }

  const unselectSeatsHandler = state => {
    emit('unselectSeats', state)
  }
</script>

<template>
  <div
    class="schemeAdminView"
    :style="{
      backgroundColor: schemeConfig.background_color || '#efefef'
    }"
  >
    <SchemeMain
      class="schemeAdminView__scheme"
      :seats="schemeSeats"
      :config="schemeConfig"
      :filters="selectionFilters"
      @changed-seats-state="changedSeatsStateHandler"
      @unselect-seats="unselectSeatsHandler"
    />
  </div>
</template>

<style lang="less" scoped>
@import url('./schemeAdminView.less');
</style>
