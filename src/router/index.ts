import { default as PostsRoutes } from '~pages'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/LayoutView.vue'),
    children: [
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/ProjectView.vue')
      },
      {
        path: 'posts',
        name: 'posts',
        component: () => import('@/views/PostListView.vue')
      },
      {
        path: 'tags',
        name: 'tags',
        component: () => import('@/views/TagsView.vue')
      },
      {
        path: 'series/:name?',
        name: 'series',
        component: () => import('@/views/SeriesView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: '/',
        name: 'posts/:title',
        component: () => import('@/views/PostView.vue'),
        children: [...PostsRoutes]
      }
    ]
  }
]
