import 'normalize.css'
import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import app from 'app'
import router from './router'
import store from './store'
import '@/utils/polyfill'
import {Component} from './Components/vue-side-menu.esm'

Vue.component(Component.name, Component)

var FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.config.productionTip = false

Vue.filter('time', function (value, format) {
  let time;
  if (typeof value === 'number') {
    time = new Date(value)
  } else {
    time = new Date(value.replace(/-/g, '/'))
  }
  return format
    .replace(/HH/g, time.getHours())
    .replace(/hh/g, time.getHours() > 12 ? time.getHours() - 12 : time.getHours())
    .replace(/mm/g, ('00' + time.getMinutes()).substr(('00' + time.getMinutes()).length - 2, 2))
    .replace(/ss/g, time.getSeconds())
});

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
