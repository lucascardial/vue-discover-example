import features from './src/map/FeaturesMap'
import modules from './src/map/ModulesMap'
import state from './src/factory/StoreFactory'
export default {
  install (Vue, options) {
    Vue.prototype.$features = features
    Vue.prototype.$modules = modules
    Vue.prototype.$state = state(features)
  }
}
