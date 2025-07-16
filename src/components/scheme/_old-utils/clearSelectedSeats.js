// FIXME: START: костыль для очистки выделения
const hallSchemeApp = inject('hallSchemeApp')

hallSchemeApp.on(hallSchemeApp.events['clearSelectedSeats'], () => {
  // Удаляем класс _selected у всех выбранных мест
  for (const id in seatsState.value.selectedSeats) {
    const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

    if (seatElement) {
      seatElement.classList.remove('_selected')
    }
  }

  // Удаляем класс _unselected у всех мест с отменой выделения
  for (const id in currentUnSelectedSeats.value) {
    const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

    if (seatElement) {
      seatElement.classList.remove('_unselected')
    }
  }

  seatsState.value.selectedSeats = {}
  currentUnSelectedSeats.value = {}
  StateHistoryManager.clearState()
})
// FIXME: END: костыль для очистки выделения
