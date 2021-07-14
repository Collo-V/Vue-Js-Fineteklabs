import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Registration.vue'
import fgtPass from '../views/Forgotpas.vue'

const routes = [
  {
    path: '/login',
    name: 'Home',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component:Register
  },
  {
    path: '/forgot-password',
    name: 'fgtPass',
    component:fgtPass
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
