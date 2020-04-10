import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import { firebaseConfig } from './firebase/firebaseConfig';
import feather from 'vue-icon';

Vue.use(feather, 'v-icon');

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
