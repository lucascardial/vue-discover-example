import features from './src/map/FeaturesMap'
import modules from './src/map/ModulesMap'
import components from './src/map/ComponentsMap'
import state from './src/factory/StoreFactory'
import router from './src/factory/RouterFactory'
export default {
  components,
  install (Vue, options) {
    state()
    router(features, modules)
    Vue.prototype.$f = 'kkkkk mds men'
  }
}
