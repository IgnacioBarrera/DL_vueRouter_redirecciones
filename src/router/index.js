import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portada',
    component: () => import('../views/Portada.vue'),
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/portada',
    redirect: '/'
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: () => import('../views/SobreMi.vue'),
    alias: '/acerca',
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue'),
    alias: '/contactame',
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/administrador/:dato',
    name: 'Administrador',
    component: () => import('../views/Administrador.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
