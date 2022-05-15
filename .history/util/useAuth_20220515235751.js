import React, { useState } from 'react'
import useSWR from 'swr'
import axios from './axios'
import { fetcher } from './fetcher'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'


export default async function useAuth() {
    const router = useRouter()
    const { data: user, error, mutate } = useSWR('/api/user', () => axios.get('/api/user').then(res => res.data.user))
    const csrf = await axios.get('/sanctum/csrf-cookie')
    const login = async (credentials, setErrors) => {
        setErrors([]);
        
        const {data: token} = useSWR('/api/login', () => {
            axios.post('/api/login', credentials)
                .then((res) => cookie.set('token', res.data.token, ) && res.data.token && mutate('/api/user'))
                .catch(error => {
                    if (error) {
                        //using flat() method to get rid of nested key value pair parenthesis since we are only getting the values
                        setErrors(Object.values(error?.response?.data).flat())
                    }
                })
        })

        console.log('TOKEN=>', token)
        
        return token
    }
    const logout = async () => {
        await axios.post('/api/logout')
        localStorage.clear()
        mutate(null);
        router.push('/login')
    }
    console.log('USER=====>', user)

    return {
        user,
        login,
        logout
    }
}

