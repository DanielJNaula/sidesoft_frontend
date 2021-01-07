import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/crear-producto',
    name: 'CrearProducto',
    component: () => import('../views/CrearProducto.vue')
  },
  {
    path: '/editar-producto/:id',
    name: 'editarProducto',
    component: () => import('../views/EditarProducto.vue')
  },
  {
    path: '*',
    component: () => import('../components/plantilla/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
