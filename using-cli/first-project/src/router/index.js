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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/html-binding',
      name: 'html-binding',
      component: () => import('../views/HtmlBinding.vue')
    },
    {
      path: '/variable',
      name: 'variable',
      component: () => import('../views/Variable.vue')
    },
    {
      path: '/methods',
      name: 'methods',
      component: () => import('../views/Methods.vue')
    },
    {
      path: '/two-way-binding',
      name: 'two-way-binding',
      component: () => import('../views/TwoBinding.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('../views/For.vue')
    },
    {
      path: '/if-else-if-else', 
      name: 'if-else-if-else',
      component: () => import('../views/IfEleIf.vue') 
    },
    {
      path: '/forms', 
      name: 'forms',
      component: () => import('../views/Forms.vue')  
    },
    {
      path: '/parent-to-child', 
      name: 'parent-to-child',
      component: () => import('../views/ParentCard.vue') 
    },
    {
      path: '/class-binding', 
      name: 'class-binding',
      component: () => import('../views/ClassBinding.vue')
    },
    {
      path: '/props', 
      name: 'props',
      component: () => import('../views/Props.vue')
    },
    {
      path: '/ref', 
      name: 'ref',
      component: () => import('../views/Ref.vue')
    },
    {
      path: '/modifiers', 
      name: 'modifiers',
      component: () => import('../views/Modifiers.vue')
    }
  ]
})

export default router
