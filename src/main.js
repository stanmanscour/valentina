import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import store from './store/store';

axios.defaults.baseURL = 'https://valentina-7c291.firebaseio.com'

Vue.use(VueResource);

export const EventBus = new Vue();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})