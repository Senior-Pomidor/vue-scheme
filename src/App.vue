<script setup>
// XXX: тут всё общение с наружей
  import SchemeView from './views/schemeView/SchemeView.vue'
  import { provide, inject, ref, useTemplateRef, onMounted } from 'vue'

  // конфиг схемы
  const schemeConfig = ref({})

  // места
  const schemeSeats = ref({})
  const schemeSeatsChunk = ref({})
  const selectedSeats = ref({})
  const selectionFilters = ref({})


  provide('schemeSeats', schemeSeats)
  provide('schemeSeatsChunk', schemeSeatsChunk)
  provide('schemeConfig', schemeConfig)
  provide('selectionFilters', selectionFilters)


  // приложение для общения с наружей
  const hallSchemeApp = inject('hallSchemeApp')
  const events = hallSchemeApp.events

  hallSchemeApp.on(events.setSchemeSeatsToApp, ({ detail }) => {
    schemeSeats.value = detail.seats || {}
  })

  hallSchemeApp.on(events.updateSeatsChunk, ({ detail }) => {
    schemeSeatsChunk.value = detail.seats || {}
  })

  hallSchemeApp.on(events.setSelectionFilters, ({ detail }) => {
    selectionFilters.value = detail.filters || {}
  })

  const handleChangedSeatsState = seats => {
    selectedSeats.value = seats

    hallSchemeApp.setSelectedSeats(seats)
  }

  const handleUnselectSeats = seats => {
    hallSchemeApp.unselectSeats(seats)
  }


  // fullscreen
  const isFullscreen = ref(false)
  provide('isFullscreen', isFullscreen)

  const handleChangeFullscreenMode = () => {
    isFullscreen.value = !isFullscreen.value

    document.body.classList.toggle('_scroll_lock')
  }


  // loader
  import LoaderControl from '@/js/classes/LoaderControl'

  const loading = ref(false)

  provide('loading', loading)

  LoaderControl.setMethod(function() {
    loading.value = false
  }, function() {
    loading.value = true
  })

  hallSchemeApp.on(events.loaderAddCount, () => {
    LoaderControl.increaseCount()
  })

  hallSchemeApp.on(events.loaderDecreaseCount, () => {
    LoaderControl.decreaseCount()
  })

  const schemeWrapperRef = useTemplateRef('schemeWrapper')

  onMounted(() => {
    // блок скролла страницы при скролле на схеме
    schemeWrapperRef.value.$el
      .addEventListener('wheel', function(evt) {
        const delta = evt.wheelDelta || -evt.detail

        this.scrollTop += (delta < 0 ? 1 : -1) * 30
        evt.preventDefault()
      })
  })
</script>

<template>
  <SchemeView
    ref="schemeWrapper"
    class="vue_hall_scheme_wrapper"
    :class="{ _full_screen: isFullscreen }"
    @changed-seats-state="handleChangedSeatsState"
    @unselect-seats="handleUnselectSeats"
    @change-fullscreen-mode="handleChangeFullscreenMode"
  />
  <!-- @clear-selected-seats="clearSelectedSeats = false" -->
  <!-- <router-view
    @changed-seats-state="updateSelectedSeatsIds"
  >
  </router-view> -->
</template>

<style lang="less">
  ._scroll_lock {
    overflow: hidden;
  }

  .vue_hall_scheme_wrapper {
    &._full_screen {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      left: 0;
      z-index: 10000;
    }
  }
</style>
