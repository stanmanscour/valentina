import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

import router from './router';
import {
    store
} from './store/store';


Vue.use(VueResource);


export const EventBus = new Vue();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})