import axios from 'axios'
import { store } from '@/store/index'
import { router } from '@/router/index'

import { API_BASE_URL } from '@/utils/constants'
import { notify } from '@/utils/notify'

class HTTP {
  constructor(params) {
    this.create = axios.create({
      baseURL: API_BASE_URL,
      withCredentials: true,
      params: {},
      data: {},
    })
    // this.params = params
    this.requestCounter = 0
    this.withoutErrorHandler = false
  }

  withoutErrorHandler() {
    this.withoutErrorHandler = true

    return this
  }

  post(path, data, loading) {
    return this.send('POST', path, data, loading)
  }

  get(path, data, loading) {
    return this.send('GET', path, data, loading)
  }

  del(path, data, loading) {
    return this.send('DELETE', path, data, loading)
  }

  async send(method, path, data, loading) {
    try {
      if (loading) {
        this.loaderOn()
      }

      const response = await this.create.request({
        method: method,
        url: path,
        responseType: 'json',
        data: data,
      })

      return response
    } catch (err) {
      if (!this.withoutErrorHandler) {
        // ошибка авторизации
        if (err?.request.status == 403) {
          router.push('/')

          store.commit('auth/SET_IS_LOGGED_IN', false)
        }

        // ошибка сети, заблокирован урл, не прошёл запрос, 404 и т.д.
        if (err?.request?.status == 0 || err?.code == 'ERR_NETWORK') {
          notify.error('Ошибка сети!')
        }

        if (err?.request?.status == 500) {
          notify.error('Что-то пошло не так')
        }
      }

      return Promise.reject(err)
    } finally {
      if (loading) {
        this.loaderOff()
      }

      this.withoutErrorHandler = false
    }
  }

  loaderOn() {
    this.requestCounter++

    if (store.state.loading) {
      return
    }

    store.state.loading = true
  }

  loaderOff() {
    this.requestCounter--

    if (!store.state.loading) {
      return
    }

    setTimeout(() => store.state.loading = false, 400)
  }
}

const http = new HTTP()

export { http }
