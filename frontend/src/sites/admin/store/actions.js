import menuApi from '@/sites/admin/api/menu';
import storage from '@/utils/localstorage';
import asyncTree from '@/utils/asyncTree';

const STORAGE_PREFIX = 'ADMIN:';

export default {
  GET_MENU: ({commit, dispatch, state}) => {
    let menu = storage.get(`${STORAGE_PREFIX}MENU`);
    if (!menu) {
      commit('SET_MENU', menu);
    } else {
      menuApi.query({'no_root': true, 'is_enabled': true}).then((res) => {
        asyncTree.arrayToTree(res).then((tree) => {
          // storage.set(`${STORAGE_PREFIX}MENU`, asyncTree.arrayToTree(res));
          commit('SET_MENU', tree);
        })
      })
    }
  },
  SET_SKIN: ({commit, dispatch, state}, {skin}) => {
    let systemSetting = JSON.parse(localStorage.getItem('systemSetting') || 0);
    if (systemSetting) {
      systemSetting.skin = skin;
      localStorage.setItem('systemSetting', JSON.stringify(systemSetting));
    } else {
      systemSetting = {skin: skin};
    }
    localStorage.setItem('systemSetting', JSON.stringify(systemSetting));
    commit('SET_SKIN', skin);
  },
  GET_SKIN: ({commit, dispatch, state}) => {
    let systemSetting = JSON.parse(localStorage.getItem('systemSetting') || 0);
    console.log(systemSetting);
    if (systemSetting) commit('SET_SKIN', systemSetting.skin);
  },
  GET_SESSION: ({commit, dispatch, state}) => {
    session.get(state.auth).then((data) => {
      commit('SET_SESSION', data);
    })
  }
}
