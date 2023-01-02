import { createRouter, createWebHistory } from 'vue-router'
import SinglePage from '../views/SinglePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SinglePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
