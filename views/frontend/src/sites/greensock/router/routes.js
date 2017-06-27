import Greensock from '../views/index'
import Preloader from '../components/Preloader'
import Castle from '../components/Castle'
import KineticJS from '../components/KineticJS'

export default [
  {
    path: '/greensock',
    component: Greensock,
    children: [
      {
        path: 'preloader',
        name: 'preloader',
        component: Preloader
      },
      {
        path: 'castle',
        name: 'castle',
        component: Castle
      },
      {
        path: 'kineticjs',
        name: 'kineticjs',
        component: KineticJS
      },
    ]
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
