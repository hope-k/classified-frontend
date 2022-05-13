import axios from 'axios'


export default axios.create({
    baseURL: 'https://hahigh.herokuapp.com',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,


})
