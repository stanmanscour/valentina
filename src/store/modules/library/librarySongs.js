import axios from 'axios'

const state = {
    librarySongs: null
}

const getters = {
    getLibrarySongs: state => {
        return state.librarySongs;
    },
    getUserId: (state, rootGetters) => {
        const user = rootGetters.getUser;
        return user;
        //return user.playlist[0];
    }
}

const mutations = {
    fetchSongs: (state, songs) => {
        state.librarySongs = songs
    }
}

const actions = {

    initLibrary: ({
        dispatch,
        getters,
        rootGetters
    }) => {
        if (!rootGetters.isAuthenticated) {
            return;
        }
        const playlistId = rootGetters.getUser.playlist.id;
        dispatch('fetchSongs', playlistId);
    },
    fetchSongs: ({
        state,
        commit,
        rootGetters
    }, playlistId) => {
        // + '?auth=' + rootGetters.getIdToken
        axios.get('/playlists/' + playlistId + '.json')
            .then(response => {
                const songs = [];
                const data = response.data;
                for (let key in data) {
                    let song = data[key];
                    songs.push(song);
                }
                commit('fetchSongs', songs);
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