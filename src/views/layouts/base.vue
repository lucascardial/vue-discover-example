<template>
  <div>
    <my-nav></my-nav>
    <h3>Layout base</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'baselayout',
  created () {
    console.log(this.$_nav)
  }
}
</script>

<style scoped>

</style>
