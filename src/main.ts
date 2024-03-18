import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import { Icon } from '@iconify/vue'

import 'remixicon/fonts/remixicon.css'
import './assets/yori.scss'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  const pinia = createPinia()
  const head = createHead()

  app.use(pinia)
  app.use(head)
  app.component('IconSets', Icon)
})
