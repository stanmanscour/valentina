import Vue from 'vue';
import Vuex from 'vuex';

import playlist from './modules/playlist';
import msgError from './modules/msgError';
import auth from './modules/auth';

// crud
import editSong from './modules/crud/editSong';
import deleteSong from './modules/crud/deleteSong';
import createSong from './modules/crud/createSong';

// library 
import searchLibrary from './modules/library/searchLibrary';

// explorer
import searchExplorer from './modules/explorer/searchExplorer';

Vue.use(Vuex);

export default new Vuex.Store({
    //export const store = new Vuex.Store({
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
        editSong,
        deleteSong,
        createSong,
        searchLibrary,
        searchExplorer,
        auth
    }
})