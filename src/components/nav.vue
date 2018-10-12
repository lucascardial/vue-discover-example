<template>
    <nav>
      <ul v-for="(nav, i) of $_nav" :key="i">
        <li> {{nav.label}}</li>
        <ul v-for="(feature, j) of nav.children" :key="j">
          <li>
            <router-link :to="{name:feature.to}">{{feature.label}}</router-link>
          </li>
          <ul v-for="(module, k) of feature.children" :key="k">
            <li>
              <router-link :to="{name:module.to}">
                {{module.label}}
              </router-link>
            </li>
          </ul>
        </ul>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'my-nav'
}
</script>
