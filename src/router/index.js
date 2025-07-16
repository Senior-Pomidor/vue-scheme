import SchemeView from '@/views/schemeView/SchemeView.vue'

import { createWebHistory, createRouter } from 'vue-router'


const routes = [

  {
    name: 'scheme_admin_view',
    path: '/',
    component: SchemeView,
  },
  // FIXME: костыль для gh-pages
  {
    name: 'scheme_admin_view',
    path: '/vue_scheme_prototype',
    component: SchemeView,
  },
  // FIXME: костыль для локального сервера live server
  // по дефолту он отркывает .../index.html
  {
    path: '/index.html',
    redirect: { path: '/' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
