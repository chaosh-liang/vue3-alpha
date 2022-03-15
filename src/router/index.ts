import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Product from '@/components/Product.vue'
import About from '@/components/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    redirect: { name: 'product' },
    children: [
      {
        path: 'product',
        name: 'product',
        component: Product
      },
      {
        path: 'live',
        component: () => import(/* webpackChunkName: "LiveComponent" */ '../components/Live.vue')
      }
    ]
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
