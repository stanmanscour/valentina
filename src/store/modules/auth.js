import axios from '../../axios-auth';

const state = {
    idToken: null,
    userId: null
}

const getters = {
    // getErrorMsg: state => {
    //     return state.errorMessage;
    // },

}

const mutations = {
    authUser(state, userData) {
        state.idToken = userData.token;
        state.userId = userData.userId;
    }
}

const actions = {
    signup({
        commit
    }, authData) {
        axios.post('/signupNewUser?key=AIzaSyCzcV6gWos5JE2WsIHG6gleiLqTJu99vCA', {
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
            })
            .catch(error => console.log(error))
    },
    login({
        commit
    }, authData) {
        axios.post('/verifyPassword?key=AIzaSyCzcV6gWos5JE2WsIHG6gleiLqTJu99vCA', {
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
            })
            .catch(error => console.log(error))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}