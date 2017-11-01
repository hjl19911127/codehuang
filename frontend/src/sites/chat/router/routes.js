import Frame from '../views/Frame'

const Message = resolve => require(['../views/Message'], resolve);
const Dialog = resolve => require(['../views/Dialog'], resolve);
const Contact = resolve => require(['../views/Contact'], resolve);
const Activity = resolve => require(['../views/Activity'], resolve);
const Sign = resolve => require(['../views/Sign'], resolve);

export default [
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  },
  {
    path: '',
    component: Frame,
    meta: {
      auth: false
    },
    children: [
      {
        path: '',
        component: {
          template: '<div><router-view></router-view></div>'
        },
        children: [
          {
            path: 'message',
            name: 'message',
            component: Message,
          },
          {
            path: 'contact',
            name: 'contact',
            component: Contact,
          },
          {
            path: 'activity',
            name: 'activity',
            component: Activity,
          }
        ]
      },
      {
        path: 'message/:mid',
        name: 'messageDetail',
        component: Dialog,
      },
    ]
  }
];
