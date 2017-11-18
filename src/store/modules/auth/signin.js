import axiosAuth from '../../../axios-auth'

import router from '../../../router';

const actions = {
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
                commit('user/authUser', {
                    token: response.data.idToken,
                    userId: response.data.localId
                }, {
                    root: true
                });

                // login
                dispatch('user/fetchConnectedUser', null, {
                    root: true
                });

                // local storage
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);


            })
            .catch(error => console.log(error))
    },
    tryAutoLogin({
        commit,
        state,
        dispatch,
        rootState
    }) {
        const token = localStorage.getItem('token');
        if (!token) {
            return
        }
        const userId = localStorage.getItem('userId');
        commit('user/authUser', {
            token: token,
            userId: userId
        }, {
            root: true
        })
        dispatch("user/fetchConnectedUser", rootState.userId, {
            root: true
        });

    }
}

export default {
    namespaced: true,
    actions
}