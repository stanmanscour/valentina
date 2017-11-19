const state = {
    player: null
}

const getters = {

}

const mutations = {
    ready(state, player) {
        state.player = player
    },
    resume(state) {
        state.player.playVideo();
    },
    pause(state) {
        state.player.pauseVideo();
    }
}

const actions = {
    ready({
        commit,
        state
    }, player) {
        commit('youtubePlayer/ready', player, {
            root: true
        })
    },
    buffering({
        commit,
        state
    }) {
        commit('player/buffering', true, {
            root: true
        })
    },
    resume({
        state,
        commit
    }) {
        commit('player/paused', false, {
            root: true
        })
        commit('youtubePlayer/resume', null, {
            root: true
        });
    },
    pause({
        state,
        commit
    }) {
        commit('player/paused', true, {
            root: true
        })
        commit('youtubePlayer/pause', null, {
            root: true
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}