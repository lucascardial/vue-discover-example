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
  name: 'app.features.auth',
  modules: modules,
  router: {
    path: '/auth'
  },
  nav: {
    label: 'Auth'
  }
}
