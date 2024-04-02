import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import { HallSchemeView } from '@/js/classes/HallSchemeView'

// global styles
// import '@/assets/less/vendors.less'
import '@/assets/less/bundle.less'
import '@/assets/less/main.less'


/**
 * Vue приложение для отрисовки и работы со схемой зала
 *
 * @export
 * @class VueHallSchemeView
 * @typedef {VueHallSchemeView}
 * @extends {HallSchemeView}
 */
class VueHallSchemeView extends HallSchemeView {
  #app
  #rootSelector

  /**
   * @param {string} rootSelector - (reqired) селектор для монтирования
   * @param {object} options - настройки
   */
  constructor(rootSelector, options = {}) {
    // const defaultOtions = {
    //   el: '#vue_hall_scheme_view_app',
    // }

    // const mergedOptions = { ...defaultOtions, ...options }

    if (!rootSelector) {
      throw new Error('[VueHallSchemeView] constructor: no el selector')
    }

    super(rootSelector, options)

    this.#rootSelector = rootSelector

    this.#app = createApp(App)
      .provide('hallSchemeApp', this)
      .mount(this.#rootSelector)

    console.info('[VueHallSchemeView] created and mounted to ' + this.#rootSelector)
  }

  /**
   * Демонтирование Vue приложения из rootSelector
   */
  // FIXME: продумать и доделать API позже
  // unmount() {
  //   this.#app.unmount(this.#rootSelector)

  //   return this
  // }
}

export { VueHallSchemeView }
