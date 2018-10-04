import Vue from 'vue'
import Vuex from 'vuex'
import features from '@/Core/Factory/StateFactory'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: features()
})
