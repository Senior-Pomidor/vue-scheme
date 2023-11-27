class HallSchemeApp {
  // const events

  constructor({ el }) {
    this._rootSelector = el || ''
    this.rootElement = this._rootSelector
      ? document.querySelector(this._rootSelector)
      : document

    this.events = {
      setSchemeConfig: 'setSchemeConfig',
      setSchemeSeatsToApp: 'setSchemeSeatsToApp',
      setSelectedSeats: 'setSelectedSeats',
      unselectSeats: 'unselectSeats',
      setSelectionFilters: 'setSelectionFilters',
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

  on(event, handler) {
    if (!this.events[event]) {
      console.log(`[HallSchemeApp] Неизвестное событие: ${event}`)

      return
    }

    this.rootElement.addEventListener(this.events[event], handler)
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
