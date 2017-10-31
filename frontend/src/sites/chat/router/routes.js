import frame from '../views/frame'

const message = resolve => require(['../views/message'], resolve);
const dialog = resolve => require(['../views/dialog'], resolve);
const contact = resolve => require(['../views/contact'], resolve);
const activity = resolve => require(['../views/activity'], resolve);
const sign = resolve => require(['../views/sign'], resolve);

export default [
  {
    path: '/sign',
    name: 'sign',
    component: sign
  },
  {
    path: '',
    component: frame,
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
            component: message,
          },
          {
            path: 'contact',
            name: 'contact',
            component: contact,
          },
          {
            path: 'activity',
            name: 'activity',
            component: activity,
          }
        ]
      },

      {
        path: 'message/:mid',
        name: 'messageDetail',
        component: dialog,
      },
    ]
  }
];
