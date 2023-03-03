import axios from 'axios';
import { useForm } from 'react-hook-form';
import defaultValue from '../utils/defaultValues';
import config from '../utils/getConfig';
import './styles/registerpage.css'

const RegisterPage = () => {
    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
        axios.post(url, data, config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
        reset(defaultValue)
    }

    return (
        <div className='register'>
            <div className="register__container">
                <div className='register__info'>
                    <h4><span>Email: </span>espinosa@gmail.com</h4>
                    <h4><span>Password: </span>230895</h4>
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
                    <button>Register</button>
                    <button>Login</button>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage