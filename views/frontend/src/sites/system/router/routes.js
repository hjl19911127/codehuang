import layout from '../views/layout'
import login from '../views/login'
import article from '../views/article'
import about from '../views/about'
import shareRoute from 'utils/shareRoute'

export default [
  {
    path: '/system',
    component: layout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: login,
      },
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
        path: '*',
        name: 'notFound',
        component: about,
      }
    ],
  },
  shareRoute
];
