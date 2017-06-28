import layout from '../views/layout'
import article from '../views/article'
import about from '../views/about'

export default [
  {
    path: '/system',
    component: layout,
    children: [
      {
        path: 'article',
        name: 'article',
        component: article,
      },
      {
        path: 'about',
        name: 'about',
        component: about,
      },
      {
        path: 'sign',
        name: 'sign',
        component: about,
      },
      {
        path: '*',
        name: 'notFound',
        component: about,
      }
    ],
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
