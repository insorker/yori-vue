import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'

import 'remixicon/fonts/remixicon.css'
import './assets/yori.scss'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  const pinia = createPinia()

  app.use(pinia)
  app.component('IconSets', Icon)
})
