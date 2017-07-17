import layout from '../views/layout'
import login from '../views/login/index'
import article from '../views/article/index'
import articleCreate from '../views/article/create'
import about from '../views/about'
import shareRoute from 'utils/shareRoute'

export default [
  {
    path: '/system/login',
    name: 'login',
    component: login,
  },
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
        path: 'article/create',
        name: 'articleCreate',
        component: articleCreate,
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
