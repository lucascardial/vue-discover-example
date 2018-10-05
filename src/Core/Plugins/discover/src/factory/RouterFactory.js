import router from '@/router'
export default (features, modules) => {
  router.addRoutes(features.reduce((routes, feature) => {
    if (feature.router === undefined) {
      console.error(
        '[Vue discover] RouterFactory: missing property "route" in',
        `"Features/${feature.namespace}/index.js"`)
      return routes
    }
    let router = feature.router
    router['name'] = feature.name
    // if (feature.modules) {
    //   router['children'] = feature.modules
    // }

    if (typeof router.component === 'string') {
      const component = modules.find(x => x.signature === router.component)
      if (component !== undefined) {
        router.component = require(`@/${component.path}`).default
      } else {
        console.error(
          '[Vue discover] RouterFactory: Signature of module',
          `"${router.component}"`, 'required in component router of',
          `"Features/${feature.namespace}/index.js"`,
          'was not found.')
        return routes
      }
    }
    routes.push(router)
    return routes
  }, []))
}
