import axios from 'axios';
import { BASE_API } from '../config';

const taskService = {
    getAll: async () => await axios.get('/task', {
        baseURL: BASE_API,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }),
    create: async (task) => await axios.post('/task', task, {
        baseURL: BASE_API,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }),
    getById: async (idtask) => await axios.get(`/task/${idtask}`, {
        baseURL: BASE_API,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }),
    update: async (idtask, task) => await axios.put(`/task/${idtask}`, task, {
        baseURL: BASE_API,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }),
    delete: async (idtask) => await axios.delete(`/task/${idtask}`, {
        baseURL: BASE_API,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }),
    complete: async (idtask) => {
        return await axios.get(`${BASE_API}/task/complete/${idtask}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }
}

export default taskService;