import features from './src/map/FeaturesMap'
import modules from './src/map/ModulesMap'
import state from './src/factory/StoreFactory'
import router from './src/factory/RouterFactory'
export default {
  modules,
  features,
  state: state(),
  router: router(features, modules),
  install (Vue, options) {
    Vue.prototype.$discover = {
      d: features
    }
  }
}
