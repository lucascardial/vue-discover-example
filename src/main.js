/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import discover from 'vue-discover'

Vue.use(
  discover, {
    routes: { joinTo: 'my.app' },
    navigation: {
      groups: [
        { label: 'Group 01', name: 'group1', icon: 'icon' }
      ]
    }
  })

Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
