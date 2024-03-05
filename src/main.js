import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import { HallSchemeApp } from '@/js/classes/HallSchemeApp'

// global styles
// import '@/assets/less/vendors.less'
import '@/assets/less/bundle.less'
import '@/assets/less/main.less'


window.hallSchemeApp = new HallSchemeApp({
  el: '#vue_hall_scheme_app',
})

class VueHallSchemeApp extends HallSchemeApp {
  #app

  constructor(options) {
    const defaultOtions = {
      el: '#vue_hall_scheme_app',
    }

    const mergedOptions = { ...defaultOtions, ...options }

    super(mergedOptions)
    this.el = mergedOptions.el
    this.#app = null
  }

  create() {
    if (!this.el) {
      console.log('[VueHallSchemeApp] create: no el selector for mounting app')

      return
    }

    this.#app = createApp(App)
      .provide('hallSchemeApp', this)

    return this
  }

  mount() {
    if (!this.el) {
      console.log('[VueHallSchemeApp] mount: no el selector for mounting app')

      return
    }

    this.#app.mount(this.el)

    return this
  }

  unmount() {
    if (!this.el) {
      console.log('[VueHallSchemeApp] unmount: no el selector for mounting app')

      return
    }

    this.#app.unmount(this.el)

    return this
  }
}

window.VueHallSchemeApp = VueHallSchemeApp
