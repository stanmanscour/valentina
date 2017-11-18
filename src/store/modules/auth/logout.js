import router from '../../../router';

const actions = {
    logout({
        commit
    }) {
        commit('user/clearAuthData', {
            root: true
        });
        router.replace('/signin');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }
}

export default {
    namespaced: true,
    actions
}