import session from '../api/session';

export default {
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
  },
  SET_NAVIGATION_DIRECTION: ({commit, dispatch, state}, {direction}) => {
    commit('SET_NAVIGATION_DIRECTION', direction);
  },
  SWITCH_SIDE_MENU: ({commit, dispatch, state}, flag) => {
    commit('SWITCH_SIDE_MENU', flag);
  },
  UPDATE_SIDE_MENU_VISIBLE_STATUS: ({commit, dispatch, state}, flag) => {
    commit('UPDATE_SIDE_MENU_VISIBLE_STATUS', flag);
  },
  SET_SIDE_MENU_ENABLE: ({commit, dispatch, state}, flag) => {
    commit('SET_SIDE_MENU_ENABLE', flag);
  },
}
