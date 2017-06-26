import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import app from 'app'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
