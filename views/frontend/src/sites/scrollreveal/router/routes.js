import Scrollreveal from '../views/index'

export default [
  {
    path: '/scrollreveal',
    component: Scrollreveal
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      let m = /^\/([\w_\-]+)\/?/gi.exec(to.path);
      if (m) {
        document.cookie = `site=${m[1]}`
        window.location.href = to.path
      }
      next()
    }
  }
];
