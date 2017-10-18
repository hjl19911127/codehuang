import layout from '../views/layout'
import message from '../views/message'
import contact from '../views/contact'
import activity from '../views/activity'
import sign from '../views/sign'

export default [
  {
    path: '/sign',
    name: 'sign',
    component: sign
  },
  {
    path: '',
    component: layout,
    meta: {
      auth: false
    },
    children: [
      {
        path: '',
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
  }
];
