import 'normalize.css'
import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import app from 'app'
import router from './router'
import store from './store'

Vue.config.productionTip = false
let historyState = history.state;
router.beforeEach((to, from, next) => {
  console.log(historyState && +historyState.key > +history.state.key);
  let transitionName = historyState && +historyState.key > +history.state.key ? 'back' : 'forward'
  store.dispatch('SET_NAVIGATION_DIRECTION', {direction: transitionName})
  historyState = history.state;
  next()
});

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
