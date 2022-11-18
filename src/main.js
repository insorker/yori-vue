import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createHead } from "@unhead/vue"
import App from './App.vue'
import Home from './Home.vue'
import Note from './Note.vue'
import Study from './Study.vue'
import TIC80 from './TIC80.vue'
import Post from './Post.vue'

import './assets/css/main.css'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/note/', component: Note },
  { path: '/study/', component: Study },
  { path: '/post/:name', component: Post },
  { path: '/tic80', component: TIC80 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const head = createHead()

const app = createApp(App)
app.use(router)
app.use(head)
app.mount('#app')
