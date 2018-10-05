import router from '@/router'
const mount = (feature, modules) => {
  if (feature.router === undefined) {
    console.error(
      '[Vue discover] RouterFactory: missing property "route" in',
      `"Features/${feature.namespace}/index.js"`)
    return false
  }
  let router = feature.router
  router['name'] = feature.name
  if (typeof router.component === 'string') {
    router.component = (router.component !== '$name') ? router.component : feature.name
    const component = modules.find(x => x.signature === router.component)
    if (component !== undefined) {
      router.component = require(`@/${component.path}`).default
    } else {
      console.error(
        '[Vue discover] RouterFactory: Signature of module',
        `"${router.component}"`, 'required in component router of',
        `"Features/${feature.namespace}/index.js"`,
        'was not found.')
      return false
    }
  }
  return router
}
export default (features, modules) => {
  router.addRoutes(features.reduce((routes, feature) => {
    const route = mount(feature, modules)
    if (feature.modules !== undefined) {
      route['children'] = feature.modules.reduce((children, nested) => {
        children.push(mount(nested, modules))
        return children
      }, [])
    }
    routes.push(route)
    return routes
  }, []))
}
