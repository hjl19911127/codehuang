import user from '../api/user';

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
  }
}
