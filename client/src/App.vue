<template>
  <div id="app">
    <Header v-bind:userID="userID"/>
    <MainComponent v-bind:userID="userID"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'app',
  components: {
    Header,
    MainComponent
  },
  data() {
    return {
      userID: ''
    }
  },
  created() {
    const href = window.location.href;
    const hrefSplit = href.split('/');
    this.userID = hrefSplit.pop();
  }
}
</script>