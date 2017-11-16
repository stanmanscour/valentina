import axiosAuth from '../../axios-auth'
import axios from 'axios'

import router from '../../router';

const state = {
    idToken: null,
    userId: null,
    user: null,
    firstConnexion: null
}

const getters = {
    // getErrorMsg: state => {
    //     return state.errorMessage;
    // },
    getUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.idToken !== null;
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
    },
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
                commit('authUser', {
                    token: response.data.idToken,
                    userId: response.data.localId
                })
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId)
                    //dispatch('storeUser', authData);
                dispatch('putUser', authData)
                    .then(response => {
                        dispatch('fetchConnectedUser');
                    })
                    .catch(err => console.log(err));
                router.push('/library')
            })
            .catch(error => console.log(error))
    },
    login({
        commit,
        dispatch
    }, authData) {
        axiosAuth.post('/verifyPassword?key=AIzaSyCzcV6gWos5JE2WsIHG6gleiLqTJu99vCA', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(response => {
                console.log(response)
                commit('authUser', {
                    token: response.data.idToken,
                    userId: response.data.localId
                });

                // login
                dispatch('fetchConnectedUser');

                // local storage
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);

                router.push('/library')
            })
            .catch(error => console.log(error))
    },
    logout({
        commit
    }) {
        commit('clearAuthData');
        router.replace('/signin');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    },
    tryAutoLogin({
        commit
    }) {
        const token = localStorage.getItem('token');
        if (!token) {
            return
        }
        const userId = localStorage.getItem('userId');
        commit('authUser', {
            token: token,
            userId: userId
        })
    },
    storeUser({
        commit,
        state
    }, userData) {
        if (!state.idToken) {
            return
        }
        //userData.id = state.userId;
        axios.post('/users.json' + '?auth=' + state.idToken, userData)
            .then(response => {
                console.log(response.data.name);
            })
            .catch(err => console.log(err))
    },
    putUser({
        commit,
        state,
        dispatch
    }, userData) {
        if (!state.idToken) {
            return
        }
        userData.id = state.userId;
        delete userData.password;
        axios.put('/users/' + state.userId + '.json', userData)
            .then(response => {
                if (state.firstConnexion) {
                    dispatch("fetchConnectedUser", state.userId);
                }
            })
            .catch(err => {
                console.log(err)
            })
    },
    fetchConnectedUser({
        commit,
        state
    }) {
        if (!state.idToken) {
            return
        }
        axios.get('/users/' + state.userId + '.json')
            .then(response => {
                commit('storeUser', response.data);
            })
            .catch(err => console.log(err))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}