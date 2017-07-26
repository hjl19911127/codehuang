import _ from 'lodash';
import menuApi from '@/sites/admin/api/menu';
import storage from '@/utils/localstorage';
import asyncTree from '@/utils/async-tree';

const STORAGE_PREFIX = 'ADMIN:';

export default {
  GET_MENU: ({commit, dispatch, state}, {route}) => {
    commit('SET_ROUTE', route);
    let menu = storage.get(`${STORAGE_PREFIX}MENU`);
    if (!menu) {
      commit('SET_MENU', menu);
    } else {
      menuApi.query({'no_root': true, 'is_enabled': true}).then((res) => {
        let map =
        commit('SET_MENU_MAP',)
        asyncTree.arrayToTree(res).then((tree) => {
          // storage.set(`${STORAGE_PREFIX}MENU`, asyncTree.arrayToTree(res));
          commit('SET_MENU', tree);
        })
      })
    }
  },
  GET_SESSION: ({commit, dispatch, state}) => {
    session.get(state.auth).then((data) => {
      commit('SET_SESSION', data);
    })
  }
}
