import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:
    {
      Teste: {
        namespaced: true,
        state: {
          data: 'lllll'
        }
      }
    }

})
