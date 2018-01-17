import Layout from '../views/Layout'

const Index = resolve => require(['../views/seek/Index'], resolve);
const Game = resolve => require(['../views/seek/Game'], resolve);

export default [
  {
    path: '',
    component: Layout,
    meta: {
      auth: false
    },
    children: [
      {
        path: 'seek',
        name: 'seek',
        component: {
          template: '<router-view></router-view>'
        },
        children: [
          {
            path: '',
            component: Index
          },
          {
            path: ':gid',
            component: Game
          }
        ]
      }
    ]
  }
];
