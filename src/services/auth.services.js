import axios from 'axios';
import { BASE_API } from '../config';

const authService = {
    register: (user) => axios.post('/register', user, {
        baseURL: BASE_API,
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }),
    login: (user) => axios.post('/login', user, {
        baseURL: BASE_API,
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }),
    verifyToken: () => axios.get('/verify', {
        baseURL: BASE_API,
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
}

export default authService;