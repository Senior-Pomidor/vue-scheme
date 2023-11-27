import { createWebHistory, createRouter } from 'vue-router'

import SchemeAdminView from '@/views/SchemeAdminView/SchemeAdminView.vue'

const routes = [

  {
    name: 'scheme_admin_view',
    path: '/',
    component: SchemeAdminView,
  },
  // FIXME: костыль для gh-pages
  {
    name: 'scheme_admin_view',
    path: '/vue_scheme_prototype',
    component: SchemeAdminView,
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
