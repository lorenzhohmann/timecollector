<template>
  <div id="app">
    <Header v-bind:userID="userID"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      userID: '',
      registeredUser: true
    }
  },
  created() {
    const href = window.location.href;
    const hrefSplit = href.split('/');
    this.userID = hrefSplit.pop();
  }
}
</script>