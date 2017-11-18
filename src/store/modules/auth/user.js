import axiosAuth from '../../../axios-auth'
import axios from 'axios'

import router from '../../../router';

const state = {
    idToken: null,
    userId: null,
    user: null
}

const getters = {
    getUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.idToken !== null;
    },
    getIdToken(state) {
        return state.idToken;
    }
}

const mutations = {
    authUser(state, userData) {
        console.log("connecté !");
        state.idToken = userData.token;
        state.userId = userData.userId;
    },
    storeUser(state, user) {
        state.user = user;
    },
    clearAuthData(state) {
        state.idToken = null;
        state.userId = null;
    }
}

const actions = {
    fetchConnectedUser({
        commit,
        state
    }) {
        if (!state.idToken) {
            return
        }
        axios.get('/users/' + state.userId + '.json')
            .then(response => {
                commit('user/storeUser', response.data, {
                    root: true
                });
                router.push('/library');
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