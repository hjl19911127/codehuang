import Layout from '../views/Layout'

const Index = resolve => require(['../views/Index'], resolve);
const Game = resolve => require(['../views/Game'], resolve);

export default [
  {
    path: '',
    component: Layout,
    meta: {
      auth: false
    },
    children: [
      {
        path: '',
        name: 'index',
        component: Index,
      },
      {
        path: 'game/:gid',
        name: 'game',
        component: Game,
      },
    ]
  }
];
