<template>
  <div id="app">
    <Header v-bind:currentRoute="this.$router.currentRoute.name"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>