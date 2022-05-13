import React, { useState } from 'react'
import useAuth from '../../util/useAuth'
const Login = () => {
    const { login, logout } = useAuth();
    const [errors, setErrors] = useState([])
    const credentials = {email: 'hope@gmail.com', password: 'kumordzie'}
    return (
        <div>
            <button onClick={ () => login(credentials, setErrors)}>Login</button>
            <button onClick={ () => logout()}>Logout</button>
            {
                errors?.map(err => (
                    <h3>{err}</h3>
                ))
            }

        </div>
    )
}

export default Login