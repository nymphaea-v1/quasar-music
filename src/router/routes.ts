import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/default-layout.vue'),
    redirect: { name: 'albums' },
    children: [
      { path: 'artists', name: 'artists', component: () => import('pages/artists.vue') },
      {
        path: 'albums',
        name: 'albums',
        component: () => import('pages/albums.vue')
      },
      {
        path: 'album/:id',
        name: 'album',
        component: () => import('pages/album.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error-404',
    component: () => import('src/pages/error-not-found.vue')
  }
]

export default routes
