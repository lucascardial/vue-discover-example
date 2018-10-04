import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireStore = require.context('../../Features/', true, /_store\.js$/)

const mapState = () => {
  const store = []
  requireStore.keys().forEach(fileName => {
    const importedFile = requireStore(fileName)
    const componentName = upperFirst(camelCase(fileName)).split('StoreJs').join('')
    if (importedFile !== undefined) store[componentName] = importedFile.default
  })
  return store
}

export default () => {
  return mapState()
}
