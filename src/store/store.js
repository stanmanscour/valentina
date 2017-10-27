import Vue from 'vue';
import Vuex from 'vuex';

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
        },
    },
    getters: {
        getCurrentSong: state => {
            return state.currentSong;
        },
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
    }

})