import About from './components/About.vue';
import Main from './components/Main.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

export const routes = [
	{ path: '', component: Main },
	{ path: '/about', component: About },
	{ path: '/login', component: Login },
	{ path: '/signup', component: Signup }
];