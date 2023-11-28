<script setup>
  import SchemeAdminView from '@/views/schemeAdminView/SchemeAdminView.vue'

  import { provide, ref, computed } from 'vue'

  // конфиг схемы
  const schemeConfig = ref({})

  // места
  const schemeSeats = ref([])
  const selectedSeats = ref({})
  const selectionFilters = ref({})
  const loading = ref(false)


  provide('schemeSeats', schemeSeats)
  provide('schemeConfig', schemeConfig)
  provide('selectionFilters', selectionFilters)
  provide('loading', loading)


  // приложение для общения с наружей
  const hallSchemeApp = window.hallSchemeApp
  const events = hallSchemeApp.events

  hallSchemeApp.on(events.setSchemeSeatsToApp, ({ detail }) => {
    schemeSeats.value = detail.seats || []
  })

  hallSchemeApp.on(events.setSelectionFilters, ({ detail }) => {
    selectionFilters.value = detail.filters || {}

    console.log('123 : ', detail.filters)
  })

  hallSchemeApp.unselectSeats()

  const updateSelectedSeats = seats => {
    selectedSeats.value = seats

    hallSchemeApp.setSelectedSeats(seats)
  }

  hallSchemeApp.on(events.loaderOn, () => {
    loading.value = true
  })

  hallSchemeApp.on(events.loaderOff, () => {
    loading.value = false
  })

  const unselectSeats = seats => {
    hallSchemeApp.unselectSeats(Object.keys(seats))
  }

  const getComponent = computed(() => SchemeAdminView)
</script>

<template>
  <component
    :is="getComponent"
    class="vue_hall_scheme_wrapper"
    @changed-seats-state="updateSelectedSeats"
    @unselect-seats="unselectSeats"
  />
  <!-- <router-view
    @changed-seats-state="updateSelectedSeatsIds"
  >
  </router-view> -->
</template>

<style lang="less" scoped>
  //
</style>
