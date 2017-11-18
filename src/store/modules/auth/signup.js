import axiosAuth from '../../../axios-auth'
import axios from 'axios'

import router from '../../../router';

const state = {
    firstConnexion: null
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
                dispatch('/putUser', authData, {
                        root: true
                    })
                    .then(response => {
                        dispatch('user/fetchConnectedUser', null, {
                            root: true
                        });
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => console.log(error))
    },
    putUser({
        commit,
        state,
        dispatch,
        rootState
    }, userData) {
        if (!state.idToken) {
            return
        }
        userData.id = rootState.userId;
        delete userData.password;
        axios.put('/users/' + rootState.userId + '.json' + '?auth=' + rootState.idToken, userData)
            .then(response => {
                //dispatch("user/fetchConnectedUser", rootState.userId);
            })
            .catch(err => {
                console.log(err)
            })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}