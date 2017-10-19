import 'normalize.css'
import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import app from '@/app'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
