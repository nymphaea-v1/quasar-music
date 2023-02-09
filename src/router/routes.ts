import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/default-layout.vue'),
    children: [
      { path: 'albums', component: () => import('pages/albums.vue') },
      { path: 'artists', component: () => import('pages/artists.vue') },
      { path: 'songs', component: () => import('pages/songs.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error-not-found.vue')
  }
]

export default routes
