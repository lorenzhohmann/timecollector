<template>
  <div id="app">
    <header>
      <div class="container">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>
          TimeCollector
          <span class="small">by Lorenz Hohmann</span>
        </h1>
      </div>
    </header>

    <MainComponent/>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'app',
  components: {
    MainComponent
  }
}
</script>