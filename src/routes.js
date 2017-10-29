import About from './components/About.vue';
import Main from './components/Main.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Explorer from './components/Explorer.vue';
import Library from './components/Library.vue';

export const routes = [{
    path: '',
    component: Main,
    children: [{
        path: 'explorer',
        component: Explorer
    }, {
        path: 'library',
        component: Library
    }]
}, {
    path: '/about',
    component: About
}, {
    path: '/login',
    component: Login
}, {
    path: '/signup',
    component: Signup
}];