import axiosAuth from '../../../axios-auth'
import axios from 'axios'

import router from '../../../router';

const state = {
    firstConnexion: null
}

const getters = {

}

const mutations = {
    firstConnexion(state) {
        state.firstConnexion = true;
    }
}

const actions = {
    signup({
        commit,
        dispatch
    }, authData) {
        commit('firstConnexion');
        axiosAuth.post('/signupNewUser?key=AIzaSyCzcV6gWos5JE2WsIHG6gleiLqTJu99vCA', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(response => {
                console.log(response)
                const data = {
                    token: response.data.idToken,
                    userId: response.data.localId
                }
                commit('user/authUser', data, {
                    root: true
                });
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId)

                // spécifique signup
                dispatch('signup/putUser', authData, {
                        root: true
                    })
                    .then(response => {

                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error))
    },
    putUser({
        commit,
        state,
        rootState,
        dispatch
    }, userData) {
        if (!rootState.user.idToken) {
            return
        }
        console.log("put user 2");
        userData.id = rootState.user.userId;
        delete userData.password;
        axios.put('/users/' + rootState.user.userId + '.json' + '?auth=' + rootState.user.idToken, userData)
            .then(response => {
                //dispatch("signup/createPlaylist");
                dispatch('user/fetchConnectedUser', null, {
                    root: true
                });
                console.log('hey');
            })
            .catch(err => {
                console.log(err)
            })
    },
    createPlaylist({
        commit,
        state,
        rootState
    }) {
        axios.post('/playlists.json', {})
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

}

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
}