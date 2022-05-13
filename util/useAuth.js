import React from 'react'
import useSWR from 'swr'
import axios from './axios'
import { fetcher } from './fetcher'
import { useRouter } from 'next/router'

export default function useAuth() {
    const router = useRouter()
    const { data: user, error, mutate } = useSWR('/api/user', fetcher)
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const login = async (credentials, setErrors) => {
        setErrors([]);
        await csrf()
        axios
            .post('/api/login', credentials)
            .then(() => mutate() && console.log('user==>', user)
            )
            .catch(error => {
                if (error) {
                    //using flat() method to get rid of nested key value pair parenthesis since we are only getting the values
                    setErrors(Object.values(error.response?.data).flat())
                }
            })

    }
    const logout = async () => {
        await axios.post('/api/logout')
        mutate();
        router.push('/login')
    }

    return {
        user,
        csrf,
        login,
        logout
    }
}

