export const incrementCounter = function ({ dispatch, state }) {
    dispatch('INCREMENT', 1)
};

export const showMenu = function ({ dispatch, state }) {
    dispatch('TOGGLEMENU', true)
};

export const hideMenu = function ({ dispatch, state }) {
    dispatch('TOGGLEMENU', false)
};

export const switchSkin = function ({ dispatch, state }) {
    dispatch('SWITCHSKIN', "blue")
};

export const active = function ({ dispatch, state}, channel ) {
    dispatch('ACTIVE', channel)
};
