import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logado from '../views/Logado.vue'
import ChangePerfil from '../views/ChangePerfil.vue'
import NewNote from '../views/NewNote.vue'
import Notes from "../views/Notes.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logado',
    name: 'Logado',
    component: Logado
  },
  {
    path: '/changePerfil',
    name: "ChangePerfil",
    component: ChangePerfil
  },
  {
    path: '/newNote',
    name: "NewNote",
    component: NewNote
  },
  {
    path: '/notes',
    name: "Notes",
    component: Notes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
