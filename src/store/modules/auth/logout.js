import router from '../../../router';

const actions = {
    logout({
        commit
    }) {
        commit('user/clearAuthData', null, {
            root: true
        });
        commit('librarySongs/clearLibrary', null, {
            root: true
        })
        router.replace('/signup');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }
}

export default {
    namespaced: true,
    actions
}