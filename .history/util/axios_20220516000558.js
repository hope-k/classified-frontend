import axios from 'axios'
import useAuth from './useAuth';
import Cookies from 'js-cookie';
const token = Cookies.get('token')

export default axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Authorization': 'Bearer '+ !!token,
        'X-Requested-With': 'XMLHttpRequest'

    },
    withCredentials: true
})

