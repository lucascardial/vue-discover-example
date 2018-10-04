import layout from '@/views/layouts/base.vue'
const features = [
  {
    name: 'Login',
    signature: 'app.modules.login',
    router: {
      path: 'login',
      props: { default: true, sidebar: 'Dynamic router prop' }
    }
  }
]
export default {
  name: 'Auth',
  signature: 'app.features.auth',
  features: features,
  router: {
    path: '/auth',
    component: layout
  }
}
