<template>
    <div>
      {{message}}

      <h3>Login</h3>
      <form action="">
        <input type="text" placeholder="email" name="user">
        <input type="password" placeholder="senha" name="passs">
        <v-button/>
      </form>
      <HelloWorld/>
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
