import Layout from '../views/Layout'
import Index from '../views/index'
import BorderRadius from '../views/borderRadius'
import Parallelogram from '../views/parallelogram'
import Rotate from '../views/rotate'
import Perspective from '../views/perspective'

export default [
  {
    path: '',
    name: 'blog',
    component: Layout,
    children: [
      {
        path: '',
        name: 'index',
        component: Index
      },
      {
        path: 'borderRadius',
        name: 'borderRadius',
        component: BorderRadius
      },
      {
        path: 'parallelogram',
        name: 'parallelogram',
        component: Parallelogram
      },
      {
        path: 'rotate',
        name: 'rotate',
        component: Rotate
      },
      {
        path: 'perspective',
        name: 'perspective',
        component: Perspective
      },
    ]
  }
];
