import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import TIC80 from './TIC80.vue'

import './assets/main.css'

const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/TIC80', component: TIC80 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
