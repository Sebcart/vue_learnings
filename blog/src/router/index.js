import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
// import Ref from '../views/Ref.vue'
// import Reactive from '../views/Reactive.vue'
// import Computed from '../views/Computed.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  }
  // {
  //   path: '/ref',
  //   name: 'Ref',
  //   component: Ref,
  // },
  // {
  //   path: '/reactive',
  //   name: 'Reactive',
  //   component: Reactive,
  // },
  //  {
  //   path: '/computed',
  //   name: 'Computed',
  //   component: Computed,
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
