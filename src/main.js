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
const app = createApp(App)

app.mount('#vue_hall_scheme_app')
