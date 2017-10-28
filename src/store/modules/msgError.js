const state = {
    errorMessage: '',
    errorVisible: false,
    errorDuration: 5000
}

const getters = {
    getErrorMsg: state => {
        return state.errorMessage;
    },
    getErrorVisible: state => {
        return state.errorVisible;
    }
}

const mutations = {
    showError: (state, payload) => {
        state.errorMessage = payload;
        state.errorVisible = true;

        setTimeout(function() {
            state.errorVisible = false;
        }, state.errorDuration);
    }
}

const actions = {
    showError: ({
        commit 
    }, payload) => {
        commit('showError', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}