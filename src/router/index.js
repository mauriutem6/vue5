import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoardView from '../views/DashBoardView.vue'
import EditarView from '../views/EditarView.vue'
import NuevoView from '../views/NuevoView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/DashBoard',
    name: 'DashBoardView',
    component: DashBoardView
  }
  ,
  {
    path: '/EditarView/:id',
    name: 'EditarView',
    component: EditarView
  }
  ,
  {
    path: '/NuevoView',
    name: 'NuevoView',
    component: NuevoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
