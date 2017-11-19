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
        commit,
        state,
        rootState,
        dispatch
    }) => {
        console.log("init library");
        if (!rootState.user.idToken) {
            return;
        }
        console.log(rootState.user.user.playlist)
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
        // + '?auth=' + rootGetters.getIdToken
        console.log('/playlists/' + playlistId + '.json');
        axios.get('/playlists/' + playlistId + '.json')
            .then(response => {
                // const songs = [];
                // const data = response.data;
                // for (let key in data) {
                //     let song = data[key];
                //     songs.push(song);
                // }
                // commit('fetchSongs', songs);
                console.log(response.data);
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