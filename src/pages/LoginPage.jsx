import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import defaultValue from '../utils/defaultValues'
import './styles/loginpage.css'

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
            <div className='loginPages'>
                <div className='loginPages__container flex'>
                    <h3 className='loginPages__welcome letter_Mynerve'>Today is a good day!</h3>
                    <form className='loginPages__form flex letter_Neon' autoComplete="off" onSubmit={handleSubmit(submit)}>
                        <h1 className='loginPages__form-user' ><i class='bx bx-user-plus'></i></h1>
                        <div className='loginPages__form-email'>
                            <label htmlFor="email">{'=>'} </label>
                            <input {...register('email')} type="email" id='email' placeholder='email' />
                        </div>
                        <div className='loginPages__form-password'>
                            <label htmlFor="password">{'=>'}  </label>
                            <input {...register('password')} type="password" id="password" placeholder='password' />
                        </div>
                        <button className='loginPages__form-btn letter_Neon'>Login</button>
                    </form>
                    <button className='loginPages__register letter_Neon' onClick={handleClick}>Register</button>
                </div>
            </div>
        )
    }
}

export default Login