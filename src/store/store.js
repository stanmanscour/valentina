import Vue from 'vue';
import Vuex from 'vuex';
import playlist from './modules/playlist';
import msgError from './modules/msgError';
import editSong from './modules/editSong';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentSong: {
            "artist": "Travis Scott",
            "counter": 0,
            "genre": "",
            "media": "youtube",
            "poster": "https://i.ytimg.com/vi/BuNBLjJzRoo/maxresdefault.jpg",
            "src": "BuNBLjJzRoo",
            "title": "90210"
        }
    },
    getters: {
        getCurrentSong: state => {
            return state.currentSong;
        }
    },
    mutations: {
        playThisSong: (state, payload) => {
            state.currentSong = payload
        }
    },
    actions:  {
        playThisSong: ({
            commit
        }, payload) => {
            commit("playThisSong", payload);
        }
    },
    modules: {
        playlist,
        msgError,
        editSong
    }
})