import axios from 'axios'

const state = {
    songs: []
}

const getters = {
    getSongs: state => {
        return state.songs;
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