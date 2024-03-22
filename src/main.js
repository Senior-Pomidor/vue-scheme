import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import { HallSchemeView } from '@/js/classes/HallSchemeView'

// global styles
// import '@/assets/less/vendors.less'
import '@/assets/less/bundle.less'
import '@/assets/less/main.less'


// window.HallSchemeView = new HallSchemeView({
//   el: '#vue_hall_scheme_app',
// })

// export class VueHallSchemeView extends HallSchemeView {
//   #app

//   constructor(options) {
//     const defaultOtions = {
//       el: '#vue_hall_scheme_view_app',
//     }

//     const mergedOptions = { ...defaultOtions, ...options }

//     super(mergedOptions)
//     this.el = mergedOptions.el
//   }

//   create() {
//     if (!this.el) {
//       console.warn('[VueHallSchemeApp] create: no el selector for mounting app')

//       return this
//     }

//     this.#app = createApp(App)
//       .provide('hallSchemeApp', this)

//     return this
//   }

//   mount() {
//     if (!this.el) {
//       console.warn('[VueHallSchemeView] mount: no el selector for mounting app')

//       return this
//     }

//     this.#app.mount(this.el)

//     return this
//   }

//   unmount() {
//     if (!this.el) {
//       console.warn('[VueHallSchemeView] unmount: no el selector for mounting app')

//       return this
//     }

//     this.#app.unmount(this.el)

//     return this
//   }
// }

// export const hallSchemeView = new VueHallSchemeView()

// window.VueHallSchemeView = VueHallSchemeView
const test_export = { name: 'qweqweqwe' }

export { test_export }

// export default { name: 'vue_hall_scheme_view' }
