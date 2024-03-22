import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import { HallSchemeView } from '@/js/classes/HallSchemeView'

// global styles
// import '@/assets/less/vendors.less'
import '@/assets/less/bundle.less'
import '@/assets/less/main.less'



/**
 * Отрисовка схемы зала
 *
 * @export
 * @class VueHallSchemeView
 * @typedef {VueHallSchemeView}
 * @extends {HallSchemeView}
 */
class VueHallSchemeView extends HallSchemeView {
  #app

  /**
   * @param {object} options
   * @param {string} options.el - селектор для монтирования
   */
  constructor(options) {
    const defaultOtions = {
      el: '#vue_hall_scheme_view_app',
    }

    const mergedOptions = { ...defaultOtions, ...options }

    super(mergedOptions)
    this.el = mergedOptions.el
  }

  /**
   * Создание Vue приложения
   */
  create() {
    if (!this.el) {
      console.warn('[VueHallSchemeView] create: no el selector for mounting app')

      return this
    }

    this.#app = createApp(App)
      .provide('hallSchemeApp', this)

    return this
  }

  /**
   * Монтирование Vue приложения в options.el
   */
  mount() {
    if (!this.el) {
      console.warn('[VueHallSchemeView] mount: no el selector for mounting app')

      return this
    }

    this.#app.mount(this.el)

    return this
  }

  /**
   * Демонтирование Vue приложения из options.el
   */
  unmount() {
    if (!this.el) {
      console.warn('[VueHallSchemeView] unmount: no el selector for unmounting app')

      return this
    }

    this.#app.unmount(this.el)

    return this
  }
}

export { VueHallSchemeView }
