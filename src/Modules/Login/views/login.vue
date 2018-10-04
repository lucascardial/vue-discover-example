<template>
    <div>
      <h3>Login</h3>
      {{sidebar}}
    </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    sidebar:{
      default: null
    }
  }
}
</script>

<style scoped>

</style>
