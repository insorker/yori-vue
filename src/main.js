import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
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
  { path: '/note/:name', component: Post },
  { path: '/study', component: Study },
  { path: '/tic80', component: TIC80 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
