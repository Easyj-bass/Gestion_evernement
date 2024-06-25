import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Home from '../views/home.vue'
import Dashboard from '../views/admin/dashboard.vue'
import Categories from '../views/admin/categorie.vue'
import Evenements from '../views/admin/evenement.vue'
import Inscription from '../views/admin/inscription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/inscriptions',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/evenements',
      name: 'Evenements',
      component: Evenements
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
   
  ]
})

export default router
