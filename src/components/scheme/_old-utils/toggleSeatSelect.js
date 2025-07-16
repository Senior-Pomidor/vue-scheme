const toggleSeatSelect = id => {
  const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

  if (seatsState.value.selectedSeats[id] || currentSelectedSeats.value[id]) {
    delete currentSelectedSeats.value[id]
    delete seatsState.value.selectedSeats[id]

    if (seatElement) {
      seatElement.classList.remove('_selected')
    }
  } else {
    currentSelectedSeats.value[id] = getQuotaSeats.value[id]
    seatsState.value.selectedSeats[id] = getQuotaSeats.value[id]

    if (seatElement) {
      seatElement.classList.add('_selected')
    }
  }

  currentSelectedSeats.value = {}

  StateHistoryManager.saveState(seatsState.value)
}

// START: scheme global listeners
const onSvgSchemeClick = evt => {
  if (!isModeSelection.value) {
    return
  }

  const $seat = evt.target.closest('g[data-seat="true"]')

  if (!$seat) {
    return
  }

  const id = $seat.dataset.id

  if (!id || !getQuotaSeats.value[id]) {
    return
  }

  toggleSeatSelect(id)
}
