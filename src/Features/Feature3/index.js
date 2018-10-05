import layout from '@/views/layouts/base.vue'
const modules = [
  {
    label: 'Login',
    name: 'app.modules.login',
    router: {
      path: 'login',
      props: { default: true, message: 'Faça login para continuar' }
    }
  }
]
export default {
  label: 'Auth',
  name: 'app.features.feature3',
  modules: modules,
  router: {
    path: '/feature3',
    component: layout
  }
}
