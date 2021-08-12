import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Read',
    component: Read
  },
  {
    path: '/create/:contentId?',
    name: 'Create',
    component: Create
  },
  {
    path: '/detail/:contentId',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
