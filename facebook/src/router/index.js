import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Login from '../views/Login.vue'
import Register from '../views/Registration.vue'
import fgtPass from '../views/Forgotpas.vue'
import celebrity from '../views/Celebrity.vue'
import Profile from "../views/Profile.vue"
const routes = [
  {
    path:"",
    name:"Home",
    component:Home
  },
  {
    path: '/login',
    name: 'Login',
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
  },
  {
    path: '/celebrity-page',
    name: 'celebrity',
    component:celebrity
  },
  {
    path: '/profile',
    name: 'profile',
    component:Profile
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
