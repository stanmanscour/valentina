import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://valentina-7c291.firebaseio.com'
});

export default instance;