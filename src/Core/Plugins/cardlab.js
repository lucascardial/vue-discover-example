const requireComponent = require.context('../../Modules/', true, /index\.js$/)

const mapModules = requireComponent.keys().reduce((map, file) => {
  const config = requireComponent(file)
  if (config.default !== undefined) {
    map.push({
      signature: config.default.signature,
      path: config.default.module.__file.replace('src/', '')
    })
  }
  return map
}, [])

const CardialModules = {
  install (Vue, options) {
    const map = mapModules
    Vue.prototype.$signaturePath = (signature) => {
      return map.find(x => x.signature === signature)
    }
  }
}
export default CardialModules
