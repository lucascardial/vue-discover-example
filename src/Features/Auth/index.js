import layout from '@/views/layouts/base.vue'
const features = [
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
  name: 'app.features.auth',
  features: features,
  router: {
    path: '/auth',
    component: layout
  }
}
