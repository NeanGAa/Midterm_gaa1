import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
