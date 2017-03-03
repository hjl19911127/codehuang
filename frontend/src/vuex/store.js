import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    count: 0,
    skin: "green",
    showMenu: true,
    channel: ''
};

const mutations = {
    INCREMENT (state, amount) {
        state.count = state.count + amount;
    },
    TOGGLEMENU (state, status) {
        state.showMenu = status;
    },
    SWITCHSKIN (state, skin){
        state.skin = skin;
    },
    ACTIVE (state, channel){
        state.channel = channel;
    }
};

export default new Vuex.Store({
    state,
    mutations
})
