import axios from 'axios';
import { useForm } from 'react-hook-form';
import defaultValue from '../utils/defaultValues';
import config from '../utils/getConfig';
import './styles/registerpage.css'
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
        axios.post(url, data, config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
        reset(defaultValue)
    }

    const handleClick = () => {
        navigate('/user/login')
    }

    const navigate = useNavigate();

    return (
        <div className='register'>
            <div className="register__container flex">
            <h1 className='register__welcome letter_Mynerve'>Sign up</h1>
                <div className='register__info'>
                    <h4 className='register__default letter_Mynerve'>default user</h4>
                    <h5><span>Email: </span>espinosa@gmail.com</h5>
                    <br />
                    <h5><span>Password: </span>230895</h5>
                </div>
                <form className='register__form' action="" onSubmit={handleSubmit(submit)}>
                    <div>
                        <label htmlFor="firstName">First name: </label>
                        <input {...register('firstName')} type="text" id='firstName' />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name: </label>
                        <input {...register('lastName')} type="text" id='lastName' />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input {...register('email')} type="email" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input {...register('password')} type="password" id='password' />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone: </label>
                        <input {...register('phone')} type="phone" id='phone' />
                    </div>
                    <div className="register__buttons">
                        <button>Register</button>
                        <button onClick={handleClick}>Login</button>
                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default RegisterPage