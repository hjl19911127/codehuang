import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue';
import app from 'app';
import router from './router';
import store from './store';

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');
