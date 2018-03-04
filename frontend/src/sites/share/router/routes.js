import Index from '../views/index'
import BorderRadius from '../views/borderRadius'
import Parallelogram from '../views/parallelogram'
import Rotate from '../views/rotate'
import Perspective from '../views/perspective'
import VueDrawerLayoutDemo from '../views/VueDrawerLayoutDemo'

export default [
  {
    path: '/vue-drawer-layout',
    name: 'vue-drawer-layout',
    component: VueDrawerLayoutDemo,
  },
  {
    path: '',
    name: 'share',
    component: Index,
    children: [
      {
        path: 'borderRadius',
        name: 'borderRadius',
        component: BorderRadius
      }, {
        path: 'parallelogram',
        name: 'parallelogram',
        component: Parallelogram
      }, {
        path: 'rotate',
        name: 'rotate',
        component: Rotate
      }, {
        path: 'perspective',
        name: 'perspective',
        component: Perspective
      },
    ]
  }

];
