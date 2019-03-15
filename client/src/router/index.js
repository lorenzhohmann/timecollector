import Vue from 'vue';
import Router from 'vue-router';
import MainComponent from '@/components/MainComponent';
import LoginComponent from '@/components/LoginComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
    	path: '/login',
    	name: 'LoginComponent',
    	component: LoginComponent
    }
  ]
})