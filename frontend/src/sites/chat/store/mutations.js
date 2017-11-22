export default {
  SET_MENU_STATUS: (state, status) => {
    state.showMenu = status;
  },
  SET_SKIN: (state, skin) => {
    state.skin = skin;
  },
  SET_SESSION: (state, data) => {
    state.session = data;
  },
  SET_NAVIGATION_DIRECTION: (state, data) => {
    state.navigationDirection = data;
  },
  SET_SIDE_MENU_VISIBLE: (state, data) => {
    state.sideMenu.visible = data;
  },
  SET_SIDE_MENU_ENABLE: (state, data) => {
    state.sideMenu.enable = data;
  },
}
