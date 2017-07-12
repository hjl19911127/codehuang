import layout from '../views/layout'
import login from '../views/login'
import articleList from '../views/article/list'
import articleCreate from '../views/article/create'
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
        component: articleList,
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
