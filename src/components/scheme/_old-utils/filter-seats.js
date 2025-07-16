const localSeats = ref({})

  // состояние мест на карте
  const seatsState = ref({
    selectedSeats: {},
  })

  // локальное хранилище отфильтрованных мест
  const filteredSeats = ref({})

  // функция фильтрации одного места
  const filterSeat = seat => {
    if (!Object.keys(props.filters).length) {
      return true
    }

    for (const filter in props.filters) {
      switch (filter) {
        case 'attrs':
          for (const attr in props.filters.attrs) {
            if (Array.isArray(props.filters.attrs[attr])) {
              if (props.filters.attrs[attr].length && !props.filters.attrs[attr].includes(seat[attr])) {
                return false
              }
            } else if (typeof props.filters.attrs[attr] === 'object') {
              // Если пустой объект, то не фильтруем по нему, иначе все места будут false
              if (!Object.keys(props.filters.attrs[attr] || {}).length) {
                return true
              }

              let hasValidOption = false

              for (const key in props.filters.attrs[attr]) {
                if (JSON.stringify(props.filters.attrs[attr][key]) === JSON.stringify(seat[attr][key])) {
                  hasValidOption = true
                  break
                }
              }

              if (!hasValidOption) {
return false
}
            } else if (JSON.stringify(props.filters.attrs[attr]) !== JSON.stringify(seat[attr])) {
              return false
            }
          }

          break

        case 'prices':
          if (props.filters.prices.min && seat.price < props.filters.prices.min
            || props.filters.prices.max && seat.price > props.filters.prices.max) {
            return false
          }

          break
        default:
          break
      }
    }

    return true
  }

  // фильтрация всех мест
  const filterAllSeats = () => {
    filteredSeats.value = {}

    for (const id in localSeats.value) {
      if (filterSeat(localSeats.value[id])) {
        filteredSeats.value[id] = localSeats.value[id]
      }
    }

    // FIXME: костыль, оптимизировать
    // чтобы не слетало выделение мест при смене филтьтров
    nextTick(() => {
      for (const id in seatsState.value.selectedSeats) {
        const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

          if (seatElement) {
            seatElement.classList.add('_selected')
          }
      }
    })
  }

  // фильтрация только измененных мест
  const filterSeatsChunk = seatsChunk => {
    for (const id in seatsChunk) {
      if (filterSeat(seatsChunk[id])) {
        filteredSeats.value[id] = seatsChunk[id]
      } else {
        delete filteredSeats.value[id]
      }
    }
  }

  // наблюдение за обновлением всех мест
  watch(() => props.seats, newSeats => {
    localSeats.value = { ...newSeats }
    filterAllSeats()
  }, { deep: true, immediate: true })

  // наблюдение за обновлением частичных мест
  watch(() => props.seatsChunk, newSeatsChunk => {
    if (!Object.keys(newSeatsChunk).length) {
return
}

    // обновляем места в локальной копии
    localSeats.value = {
      ...localSeats.value,
      ...newSeatsChunk,
    }

    // фильтруем только измененные места
    filterSeatsChunk(newSeatsChunk)
  }, { deep: true })

  // наблюдение за изменением фильтров
  watch(() => props.filters, () => {
    filterAllSeats()
  }, { deep: true })

  const getSeats = computed(() => localSeats.value)
  const getQuotaSeats = computed(() => filteredSeats.value)
