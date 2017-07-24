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
  SET_MENU: (state, data) => {
    state.menu = data;
  }
}
