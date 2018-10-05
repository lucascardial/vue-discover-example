<template>
    <div>
      {{message}}

      <h3>Login</h3>
    </div>
</template>

<script>
export default {
  name: 'login',
  signature: 'app.modules.login',
  props: {
    message: {
      default: null
    }
  }
}
</script>

<style scoped>

</style>
