import React, { useState } from 'react'
import useSWR from 'swr'
import axios from './axios'
import { fetcher } from './fetcher'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'


export default function useAuth() {
    const router = useRouter()
    const { data: user, error, mutate } = useSWR('/api/user', () => axios.get('/api/user').then(res => res.data.user))
    const login = async (credentials, setErrors) => {
        setErrors([]);
        axios.post('/api/login', credentials)
            .then((res) => mutate() && cookie.set('isAuthenticated', true))
            .catch(error => {
                if (error) {
                    //using flat() method to get rid of nested key value pair parenthesis since we are only getting the values
                    setErrors(Object.values(error?.response?.data).flat())
                }
            })


    }
    const logout = async () => {
        await axios.post('/api/logout')
        localStorage.clear()
        mutate(null);
        router.push('/login')
    }

    return {
        user,
        login,
        logout,
    }
}

