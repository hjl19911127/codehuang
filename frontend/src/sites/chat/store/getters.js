export default {
  getShowMenu(state, getters) {
    return state.showMenu
  },

  getSkin(state, getters) {
    return state.skin
  },

  getSession(state, getters) {
    return state.session
  },

  transitionName(state, getters) {
    return `slide-${state.navigationDirection}`
  },

 sideMenuVisible(state) {
    return state.sideMenu.visible
  }
}
