import axiosAuth from '../../axios-auth'
import axios from 'axios'

import router from '../../router';

const state = {
    idToken: null,
    userId: null,
    user: null
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
    signup({
        commit,
        dispatch
    }, authData) {
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
                dispatch('storeUser', authData)
            })
            .catch(error => console.log(error))
    },
    login({
        commit
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
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId)
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
        axios.post('/users.json' + '?auth=' + state.idToken, userData)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    },
    fetchUser({
        commit,
        state
    }) {
        if (!state.idToken) {
            return
        }
        axios.get('/users.json' + '?auth=' + state.idToken)
            .then(response => {
                console.log(response);
                const data = response.data;
                const users = [];
                for (let key in data) {
                    const user = data[key];
                    user.id = key;
                    users.push(user);
                }
                console.log(users);
                commit('storeUser', users[0])
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