import Index from '../views/index';
import BorderRadius from '../views/borderRadius';
import Parallelogram from '../views/parallelogram';
import Rotate from '../views/rotate';
import Perspective from '../views/perspective';

export default [
  {
    path: '/share',
    name: 'share',
    component: Index,
    children: [
      {
        path: 'borderRadius',
        name: 'borderRadius',
        component: BorderRadius
      }, {
        path: 'parallelogram',
        name: 'parallelogram',
        component: Parallelogram
      }, {
        path: 'rotate',
        name: 'rotate',
        component: Rotate
      }, {
        path: 'perspective',
        name: 'perspective',
        component: Perspective
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
