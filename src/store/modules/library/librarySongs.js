import axios from 'axios'

const state = {
    library: null
}

const getters = {
    getCurrentLibrary: state => {
        return state.library;
    },
    getUserId: (state, rootGetters) => {
        const user = rootGetters.getUser;
        return user;
        //return user.playlist[0];
    }
}

const mutations = {
    fetchSongs: (state, songs) => {
        state.library = songs
    },
    clearLibrary: (state) => {
        state.library = null
    }
}

const actions = {

    initLibrary: ({
        commit,
        state,
        rootState,
        dispatch
    }) => {
        console.log("init library");
        if (!rootState.user.idToken) {
            return;
        }
        const playlistId = rootState.user.user.playlist;
        dispatch('librarySongs/fetchSongs', playlistId, {
            root: true
        });
    },
    fetchSongs: ({
        state,
        commit,
        rootGetters,
        rootState
    }, playlistId) => {
        axios.get('/playlists/' + playlistId + '.json')
            .then(response => {
                commit('librarySongs/fetchSongs', response.data, {
                    root: true
                })
            })
            .catch(err => console.log(err))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}