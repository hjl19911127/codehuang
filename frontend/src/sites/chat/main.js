import 'normalize.css'
import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import app from 'app'
import router from './router'
import store from './store'

Vue.config.productionTip = false
let historyState = history.state, lastDirection;
router.beforeEach((to, from, next) => {
  let direction = ''
  if (!historyState && !history.state) {
    direction = 'forward'
  } else if (history.state && !historyState) {
    direction = 'forward'
  } else if (historyState && !history.state) {
    direction = 'back'
  } else if (historyState && +historyState.key > +history.state.key) {
    direction = 'back'
  } else if (historyState && +historyState.key === +history.state.key) {
    if (lastDirection === 'back') {
      direction = 'forward'
    } else {
      direction = 'back'
    }
  } else {
    direction = 'forward'
  }
  store.dispatch('SET_NAVIGATION_DIRECTION', {direction})
  historyState = history.state || historyState;
  lastDirection = direction;
  next()
});

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
