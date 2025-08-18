class LoaderControl {
  constructor(count, name = 'loaderControl') {
    this.count = count
    this.name = name
    this.fallbackTimeout = null

    window[`${name}Count`] = count
  }

  setMethod(offCallback, onCallback) {
    this.offCallback = offCallback
    this.onCallback = onCallback
  }

  increaseCount() {
    if (this.count == 0) {
      this.onCallback()
    }

    clearTimeout(this.fallbackTimeout)
    this.fallbackTimeout = setTimeout(this._fallback, 30000)

    this.count++
    window[`${this.name}Count`]++
  }

  decreaseCount() {
    if (this.count) {
      this.count--
      window[`${this.name}Count`]--
    }

    if (this.count === 0) {
      this.offCallback()
    }
  }

  _fallback = () => {
    this.count = 0
    window[`${this.name}Count`] = 0

    if (this.offCallback) {
      this.offCallback()
    }
  }
}

export default new LoaderControl(0, 'HallScheme')
