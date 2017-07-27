export default {
  menu(state, getters) {
    return state.menu
  },

  defaultOpeneds(state, getters) {
    let activeMenu = state.menuMap[state.route];
    return activeMenu && activeMenu.parent_id !== 1 ? [`${activeMenu.parent_id}`] : [];
  },

  activeIndex(state, getters) {
    return state.route
  },

  session(state, getters) {
    return state.session
  }
}
