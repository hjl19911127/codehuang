export default {
  menu(state, getters) {
    return state.menu
  },
  menuCollapse(state, getters) {
    return state.menu.isCollapse
  },

  defaultOpeneds(state, getters) {
    let activeMenu = state.menu.map[state.route];
    return activeMenu && activeMenu.parent_id !== 1 ? [`${activeMenu.parent_id}`] : [];
  },

  activeIndex(state, getters) {
    return state.route
  },

  session(state, getters) {
    return state.session
  }
}
