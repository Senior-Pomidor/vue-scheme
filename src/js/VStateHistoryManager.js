class VStateHistoryManager {
  constructor(maxStatesLength) {
    this.states = [] // массив всех состояний
    this.maxStatesLength = maxStatesLength || 5 // максимальное количество сохраняемых состояний
  }

  // сохраняет текущее состояние приложения
  saveState(state) {
    const newState = JSON.parse(JSON.stringify(state))

    if (this.states.length > this.maxStatesLength) {
      this.states.shift()
    }

    this.states.push(newState)

    return this.getPrevState()
  }

  // отменяет последнее действие
  undo() {
    if (this.states?.length > 1) {
      this.states.pop()

      return this.getPrevState()
    }

    return null
  }

  // возвращает текущее состояние
  getPrevState() {
    if (this.states.length) {
      const lastState = structuredClone(this.states[this.states.length - 1])

      return lastState
    }

    return null
  }

  clearState() {
    this.states = []
  }
}

export { VStateHistoryManager }
