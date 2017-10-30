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

  getTransitionName(state, getters) {
    return `slide-${state.navigationDirection}`
  }
}
