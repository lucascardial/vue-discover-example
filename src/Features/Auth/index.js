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
  name: 'app.features.auth',
  modules: modules,
  router: {
    path: '/auth',
    component: layout
  },
  nav: {
    label: 'Auth'
  }
}
