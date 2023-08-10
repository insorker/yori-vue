import VPRoutes from '~pages'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/',
    name: 'page',
    component: () => import('@/views/LayoutView.vue'),
    children: [
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/ProjectView.vue')
      },
      {
        path: 'note',
        name: 'note',
        component: () => import('@/views/NoteView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: '/',
        name: 'post',
        component: () => import('@/views/PostView.vue'),
        children: VPRoutes
      }
    ]
  }
]
