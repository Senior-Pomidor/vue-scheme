class HallSchemeApp {
  // const events

  constructor({ el }) {
    this._rootSelector = el || ''
    this.appId = Date.now()
    this.rootElement = this._rootSelector
      ? document.querySelector(this._rootSelector)
      : document

    this.events = {
      setSchemeConfig: `setSchemeConfig${this.appId}`,
      setSchemeSeatsToApp: `setSchemeSeatsToApp${this.appId}`,
      updateSeatsChunk: `updateSeatsChunk${this.appId}`,
      setSelectedSeats: `setSelectedSeats${this.appId}`,
      unselectSeats: `unselectSeat${this.appId}`,
      setSelectionFilters: `setSelectionFilters${this.appId}`,
      loaderAddCount: `loaderAddCount${this.appId}`,
      loaderDecreaseCount: `loaderDecreaseCount${this.appId}`,
    }

    this.selectedSeats = {}
    this.selectionFilters = {
      attrs: {},
      prices: {},
    }

    // this.config = {
    //   seat_size: '20px',
    //   status colors
    // }
  }

  on(eventName, handler) {
    eventName = eventName.split(this.appId)[0]
    console.log(eventName)
    // обрезать айдишку
    if (!this.events[eventName]) {
      console.log(`[HallSchemeApp] Неизвестное событие: ${eventName}`)

      return
    }

    this.rootElement.addEventListener(this.events[eventName], handler)
  }

  setSelectionFilters(filters) {
    this.selectionFilters = filters

    const event = new CustomEvent(this.events.setSelectionFilters, {
      detail: { filters },
    })

    this.rootElement.dispatchEvent(event)
  }

  setSchemeConfig(config) {
    const event = new CustomEvent(this.events.setSchemeConfig, {
      detail: { config },
    })

    this.rootElement.dispatchEvent(event)
  }

  setSchemeSeatsToApp(seats) {
    const event = new CustomEvent(this.events.setSchemeSeatsToApp, {
      detail: { seats },
    })

    this.rootElement.dispatchEvent(event)
  }

  updateSeatsChunk(seats) {
    const event = new CustomEvent(this.events.updateSeatsChunk, {
      detail: { seats },
    })

    this.rootElement.dispatchEvent(event)
  }

  getSelectedSeats() {
    return this.selectedSeats
  }

  setSelectedSeats(seats) {
    this.selectedSeats = seats

    const event = new CustomEvent(this.events.setSelectedSeats, {
      detail: { seats },
    })

    this.rootElement.dispatchEvent(event)
  }

  unselectSeats(ids) {
    const event = new CustomEvent(this.events.unselectSeats, {
      detail: { ids },
    })

    this.rootElement.dispatchEvent(event)
  }

  getRootElement() {
    return this.rootElement
  }


  loaderAddCount() {
    const event = new CustomEvent(this.events.loaderAddCount)

    this.rootElement.dispatchEvent(event)
  }

  loaderDecreaseCount() {
    const event = new CustomEvent(this.events.loaderDecreaseCount)

    this.rootElement.dispatchEvent(event)
  }

  // setConfig(config) {
  //   if (!config) {
  //     return
  //   }

  //   this.config = config
  //   // на изменение данных извне дергать кастомные события внутри компонента
  // }

  // getConfig(config) {
  //   return this.config
  // }
}

export { HallSchemeApp }
