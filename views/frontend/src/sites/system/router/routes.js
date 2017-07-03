import layout from '../views/layout'
import article from '../views/article'
import about from '../views/about'
import shareRoute from '../../../utils/shareRoute'

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
  shareRoute
];
