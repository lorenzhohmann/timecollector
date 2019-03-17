import Vue from 'vue';
import Router from 'vue-router';
import MainComponent from '@/components/MainComponent';
import LoginComponent from '@/components/LoginComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/dashboard',
      name: 'MainComponent',
      component: MainComponent
    },
    {
      path: '*',
      redirect: 'login'
    }
  ]
})