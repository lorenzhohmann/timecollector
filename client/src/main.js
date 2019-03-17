import Vue from 'vue'
import App from './App.vue';
import router from './router';

import {sync} from 'vuex-router-sync';
import store from '@/store/store';

Vue.config.productionTip = false

sync(store, router);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
