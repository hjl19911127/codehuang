import frame from '../views/frame'
import layout from '../views/layout'

const message = resolve => require(['../views/message'], resolve);
const messageDetail = resolve => require(['../views/message-detail'], resolve);
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
        component: layout,
        children: []
      },
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
      },
      {
        path: 'message/:mid',
        name: 'messageDetail',
        component: messageDetail,
      },
    ]
  }
];
