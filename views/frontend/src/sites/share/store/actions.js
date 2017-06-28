export default {
  TOGGLE_ACTIVE: ({ commit, dispatch, state }, { channel }) => {
    commit('SET_ACTIVE', channel);
  }
}

