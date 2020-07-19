import Vue from 'vue';
import firebase from 'firebase';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import Cabinet from '../views/Cabinet.vue';
import Product from '../views/Product.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/cabinet',
    name: 'Cabinet',
    component: Cabinet,
    beforeEnter: authGuard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

function authGuard (from, to, next) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      next();
    } else {
      next('/')
    }
  });
}

export default router;
