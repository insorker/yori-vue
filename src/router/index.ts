import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/',
      name: 'template',
      component: () => import('@/views/PageView.vue'),
      children: [
        {
          path: '/project',
          name: 'project',
          component: () => import('@/views/ProjectView.vue')
        },
        {
          path: '/note',
          name: 'note',
          component: () => import('@/views/NoteView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
