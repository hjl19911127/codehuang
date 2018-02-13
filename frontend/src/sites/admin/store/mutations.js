export default {
  SET_SESSION: (state, data) => {
    state.session = data;
  },
  SET_MENU: (state, data) => {
    state.menu.tree = data;
  },
  SET_MENU_MAP: (state, data) => {
    state.menu.map = data;
  },
  SET_MENU_COLLAPSE: (state, data) => {
    state.menu.isCollapse = data;
  },
  SET_ROUTE: (state, data) => {
    state.route = data;
  },
}
