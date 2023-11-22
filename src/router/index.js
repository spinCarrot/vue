import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Visit',
      name: 'visit',
      component : ()=> import('../views/Visit.vue')
      
    },
    {
      path: '/Life',
      name: 'life',
      component : ()=> import('../views/Life.vue')
      
    },
    {
      path: '/Transport',
      name: 'transport',
      component : ()=> import('../views/Transport.vue')
      
    },
  ]
})

export default router
