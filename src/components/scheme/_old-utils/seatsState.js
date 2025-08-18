// composables
import { useUndoRedo } from '@/composables/useUndoRedo'

const seatsState = ref({
  selectedSeats: {},
})

// текущие выделенные места
const currentSelectedSeats = ref({})

// текущие места для снятия выделения
const currentUnSelectedSeats = ref({})

const openedSeats = ref({})

// возвращает формат идентичный seatsState
const getSeatsState = computed(() => {
  const seatsStateCopy = JSON.parse(JSON.stringify(seatsState.value))
  const seatsStateCopyRef = ref(seatsStateCopy)

  return seatsStateCopyRef
})

watch(() => getSeatsState.value, newVal => {
  emit('changedSeatsState', newVal.value.selectedSeats)
})


const {
  StateHistoryManager,
  undoLastAction,
} = useUndoRedo(seatsState)

// Наблюдаем за изменениями выбранных мест и обновляем классы элементов
watch(() => seatsState.value.selectedSeats, (newSelectedSeats, oldSelectedSeats) => {
  // Находим места, которые были выделены, но сейчас отменены
  for (const id in oldSelectedSeats) {
    if (!newSelectedSeats[id]) {
      // Удаляем класс _selected у мест, которые более не выделены
      const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

      if (seatElement) {
        seatElement.classList.remove('_selected')
      }
    }
  }

  // Находим новые выделенные места
  for (const id in newSelectedSeats) {
    if (!oldSelectedSeats[id]) {
      // Добавляем класс _selected новым выделенным местам
      const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

      if (seatElement) {
        seatElement.classList.add('_selected')
      }
    }
  }
}, { deep: true })


// const clearSelectedSeats = () => {
//   currentSelectedSeats.value = {}
//   seatsState.value.selectedSeats = {}

//   StateHistoryManager.clearState()
//   StateHistoryManager.saveState(seatsState.value)
// }

const getSeats = computed(() => props.seats)

watch(() => getSeats.value, newVal => {
  // ??? Удаляем класс _selected у всех выбранных мест
  // for (const id in seatsState.value.selectedSeats) {
  //   const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)
  //   if (seatElement) {
  //     seatElement.classList.remove('_selected')
  //   }
  // }

  // ??? Удаляем класс _unselected у всех мест с отменой выделения
  // for (const id in currentUnSelectedSeats.value) {
  //   const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)
  //   if (seatElement) {
  //     seatElement.classList.remove('_unselected')
  //   }
  // }

  // currentSelectedSeats.value = {} ???
  seatsState.value.selectedSeats = {}
  // currentUnSelectedSeats.value = {} ???

  StateHistoryManager.clearState()
  StateHistoryManager.saveState(seatsState.value)

  // clearSelectedSeats()
}, { deep: true })


onMounted(() => {
  // таймаут для прогрузки свг карты с местами
  setTimeout(() => {
    addGlobalEventListeners()

    // Устанавливаем класс _selected для всех уже выбранных мест
    nextTick(() => {
      for (const id in seatsState.value.selectedSeats) {
        const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

        if (seatElement) {
          seatElement.classList.add('_selected')
        }
      }
    })

    StateHistoryManager.saveState(seatsState.value)
  }, 100)
})
