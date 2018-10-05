<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('features', this.$features)
    console.log('modules', this.$modules)
    console.log('state', this.$state)
  }
}
</script>

<style>

</style>
