const state = {
    searchVisible: false
}

const getters = {
    getSearchVisible: state => {
        return state.searchVisible;
    }
}

const mutations = {
    toggleSearch: state => {
        state.searchVisible = !state.searchVisible;
    }
}

const actions = {
    toggleSearch: ({
        commit
    }) => {
        commit("toggleSearch");
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}