import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/About',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/kittipong',
      name: 'kittipong',
      component: () => import(/* webpackChunkName: "about" */ './views/kittipong.vue'),
    },



  ],
});
