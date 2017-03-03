import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue';
import app from 'app';
import router from './router';
import store from './store';
import * as filters from './filter';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');
