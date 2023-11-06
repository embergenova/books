import { createRouter, createWebHistory } from 'vue-router'
import { mainRoute } from '../modules/main/router'
import { detailsRoute } from '../modules/details/router'
import { mybooksRoute } from '../modules/mybooks/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoute,
    ...detailsRoute,
    ...mybooksRoute
  ]
})

export default router

