const state = {
    playlist: []
}

const getters = {
    getPlaylist: state => {
        return state.playlist;
    }
}

const mutations = {
    addToPlaylist: (state, payload) => {
        state.playlist.unshift(payload);
    },
    removeFromPlaylist: (state, payload) => {
        let songTitle = payload.title; // a remplacer par id
        let index = state.playlist.findIndex(function(x) {
            return x.title == songTitle
        });
        state.playlist.splice(index, 1);
    }
}

const actions = {
    addToPlaylist: ({
        commit
    }, payload) => {
        commit("playlist/addToPlaylist", payload, {
            root: true
        });
    },
    removeFromPlaylist: ({
        commit
    }, payload) => {
        commit("playlist/removeFromPlaylist", payload, {
            root: true
        });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}