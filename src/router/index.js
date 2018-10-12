import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layouts/base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'guiaa.app',
      component: layout
    }
  ]
})
