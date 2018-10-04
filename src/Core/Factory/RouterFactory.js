import CardLab from '@/Core/Plugins/cardlab'
import Vue from 'vue'

const vue = Vue.use(CardLab)
const component = require.context('../../Features', true, /feature\.js$/)

const buildChildrenRouter = (features) => {
  return features.reduce((result, feature) => {
    console.log('aaa', feature)
    let children = feature.router
    children['names'] = feature.signature
    children['component'] = require(`@/${
      vue.prototype.$signaturePath('guiaa.modules.login').path
    }`).default
    result.push(children)
    return result
  }, [])
}

const mapRoutes = component.keys().reduce((routes, file) => {
  const feature = component(file)
  if (feature.default !== undefined) {
    let router = feature.default.router
    router['name'] = feature.default.signature
    router['children'] = buildChildrenRouter(feature.default.features)
    routes.push(router)
    return routes
  }
}, [])

export default mapRoutes
