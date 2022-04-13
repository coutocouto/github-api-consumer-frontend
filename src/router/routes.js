
const routes = [
  {
    path: '/',
    component: () => import('components/TableGitUsers.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
