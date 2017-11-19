const state = {
    currentSong: {
        "artist": "Travis Scott",
        "counter": 0,
        "genre": "",
        "media": "youtube",
        "poster": "https://i.ytimg.com/vi/BuNBLjJzRoo/maxresdefault.jpg",
        "src": "BuNBLjJzRoo",
        "title": "90210"
    },
    playing: null,
    paused: null,
    buffering: null
}

const getters = {
    getCurrentSong: state => {
        return state.currentSong;
    },
    isPaused: state => {
        return state.paused;
    },
    isPlaying: state => {
        return state.playing
    },
    isBuffering: state => {
        return state.buffering
    }
}

const mutations = {
    paused: (state) => {
        state.paused = true;
        state.playing = false;
        state.buffering = false;
    },
    playing: (state) => {
        state.playing = true;
        state.paused = false;
        state.buffering = false;
    },
    buffering: (state, boolean) => {
        state.buffering = true;
        state.playing = false;
        state.paused = false;
    },
    playThisSong: (state, payload) => {
        state.currentSong = payload
    }
}

const actions = {
    playThis: ({
        state,
        commit
    }, payload) => {
        commit("playThisSong", payload);
    },
    pauseSong: ({
        state,
        dispatch
    }) => {
        const media = state.currentSong.media;
        if (media === 'youtube') {
            dispatch('youtubePlayer/pause');
        }
    },
    resumeSong: ({
        state,
        dispatch
    }) => {
        const media = state.currentSong.media;
        if (media === 'youtube') {
            dispatch('youtubePlayer/resume');
        }
    },
    paused: ({
        state,
        commit
    }) => {
        commit('player/paused', null, {
            root: true
        })
    },
    playing: ({
        state,
        commit
    }) => {
        commit('player/playing', null, {
            root: true
        })
    },
    ended: ({
        state,
        commit
    }) => {
        console.log('ended');
        // dispatch add counter
        // dispatch next song
    },
    playNextSong: ({
        state,
        commit
    }) => {

    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}