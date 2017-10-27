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
        playlist: []
    },
    getters: {
        getCurrentSong: state => {
            return state.currentSong;
        },
        getPlaylist: state => {
            return state.playlist;
        }
    },
    mutations: {
        playThisSong: (state, payload) => {
            state.currentSong = payload
        },
        addToPlaylist: (state, payload) => {
            state.playlist.unshift(payload);
        },
        removeFromPlaylist: (state, payload) => {
            let songTitle = payload.title; // a remplacer par id
            let index = state.playlist.findIndex(function(x) {
                return x.title == songTitle
            });
            state.playlist.splice(index, 1);
        },
        checkIntoPlaylist: (state, payload) => {
            let answer = state.playlist.indexOf(payload);
            if (answer === -1) {
                return "false";
            } else {
                return "true";
            }
        }
    },
    actions:  {
        playThisSong: ({
            commit
        }, payload) => {
            commit("playThisSong", payload);
        },
        addToPlaylist: ({
            commit
        }, payload) => {
            commit("addToPlaylist", payload);
        },
        removeFromPlaylist: ({
            commit
        }, payload) => {
            commit("removeFromPlaylist", payload);
        },
        checkIntoPlaylist: ({
            commit
        }, payload) => {
            commit("checkIntoPlaylist", payload);
        }
    }

})