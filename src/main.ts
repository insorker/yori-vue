import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createPinia } from 'pinia'

import './assets/yori.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    const pinia = createPinia()
    app.use(pinia)
  },
)

// const app = createApp(App)
// const pinia = createPinia()

// app.use(router)
// app.use(pinia)

// app.mount('#app')
