import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import defaultValue from '../utils/defaultValues'
import config from '../utils/getConfig'

const Login = () => {

    const [token, setToken] = useState()

    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';

        axios.post(url, data)
            .then(res => {
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
            })
            .catch(err => {
                console.log(err.response)
                localStorage.clear()
            })
        reset(defaultValue)
    }

    const handleClick = () => {
        navigate('/user/register')
    }

    const handleLogout = () => {
        localStorage.clear()
        setToken()
    }

    if (localStorage.getItem('name')) {
        return (
            <div>
                <img src="" alt="" />
                <h2>{localStorage.getItem('name')}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>Welcome</h3>
                <form autoComplete="off" onSubmit={handleSubmit(submit)}>
                    <h3>Login</h3>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register('email')} type="email" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input {...register('password')} type="password" id="password" />
                    </div>
                    <button>Login</button>
                </form>
                <button onClick={handleClick}>Register</button>
            </div>
        )
    }
}

export default Login