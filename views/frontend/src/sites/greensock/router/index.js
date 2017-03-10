import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routes
});
