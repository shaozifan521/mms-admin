<template>
  <div class="main">
    <app-link v-show="$route.path !== '/home' && $route.path !== '/home/'"></app-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import AppLink from './Link.vue'

  export default {
    components: {
      AppLink,
    }
  }
</script>

<style scoped>

 
</style>
