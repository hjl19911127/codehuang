export default {
  SET_NAVIGATION_DIRECTION: (state, data) => {
    state.navigationDirection = data;
  },
  SWITCH_SIDE_MENU: (state, data) => {
    state.sideMenu.action = {visible: data};
  },
  SET_SIDE_MENU_ENABLE: (state, data) => {
    state.sideMenu.enable = data;
  },
  UPDATE_SIDE_MENU_VISIBLE_STATUS: (state, data) => {
    state.sideMenu.nowVisible = data;
  },
}
