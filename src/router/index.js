import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})

export default router
