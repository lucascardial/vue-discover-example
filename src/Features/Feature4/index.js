import layout from '@/views/layouts/base.vue'
const modules = [
  {
    label: 'Login',
    name: 'app.modules.login',
    router: {
      path: 'login',
      props: { default: true, message: 'Faça login para continuar' },
      component: '$name'
    }
  }
]
export default {
  label: 'Auth',
  name: 'app.features.feature4',
  modules: modules,
  router: {
    path: '/feature4',
    component: layout
  }
}
