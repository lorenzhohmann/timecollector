<template>
  <header>
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <button
        class="btn btn-danger float-right ml-5 mt-2"
        v-if="$store.state.isUserLoggedIn"
        v-on:click="logout()"
      >
        Logout
      </button>
      <h1 class="mt-2">
        TimeCollector
      </h1>
      <span class="clearfix"></span>
    </div>
    <div class="sub-header" v-if="currentRoute !== 'LoginComponent'">
      <h2>
        {{
          this.$store.state.isUserLoggedIn
            ? 'Hallo, ' + this.$store.state.user.name + '!'
            : '404'
        }}
      </h2>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: ['userID', 'currentRoute'],
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push('login');
    },
  },
};
</script>
