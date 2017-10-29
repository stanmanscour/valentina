const state = {
    editSong: {},
    tplEditSongVisible: false
}

const getters = {
    getEditSong: state => {
        return state.editSong;
    },
    getTplEditSongVisible: state => {
        return state.tplEditSongVisible;
    }
}

const mutations = {
    showTplEditSong: (state, payload) => {
        state.editSong = payload;
        state.tplEditSongVisible = true;
    },
    hideTplEditSong: state => {
            state.tplEditSongVisible = false;
            state.editSong = {};
        }
        // curl functions
}

const actions = {
    showTplEditSong: ({
        commit
    }, payload) => {
        commit('showTplEditSong', payload);
    },
    hideTplEditSong: ({
        commit
    }, payload) => {
        commit('hideTplEditSong', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}