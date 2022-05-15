import axios from 'axios'
import useAuth from './useAuth';
import Cookies from 'js-cookie';
const token = Cookies.get('token')

export default axios.create({
    baseURL: 'https://hahigh.herokuapp.com',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'

    },
    withCredentials: true
})

