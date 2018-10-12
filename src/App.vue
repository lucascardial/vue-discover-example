<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('navs', this.$_nav)
  }
}
</script>

<style>

</style>
