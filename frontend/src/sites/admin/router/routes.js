import layout from '../views/layout'
// import login from '../views/login/index'
// import article from '../views/article/index'
// import articleCreate from '../views/article/create'
import about from '../views/about'
import shareRoute from 'utils/shareRoute'

const login = resolve => require(['../views/login/index'], resolve);
const article = resolve => require(['../views/article/index'], resolve);
const articleEdit = resolve => require(['../views/article/edit'], resolve);
const menu = resolve => require(['../views/menu/index'], resolve);

export default [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    component: layout,
    children: [

      {
        path: '/article',
        name: 'article',
        component: article,
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: articleEdit,
      },
      {
        path: '/article/:id',
        name: '/articleEdit',
        component: articleEdit,
      },
      {
        path: '/menu',
        name: 'menu',
        component: menu,
      },
      {
        path: '/about',
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
