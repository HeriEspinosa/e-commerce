import React from 'react'
import './styles/errorproduct.css'

const ErrorProduct = () => {
    return (
        <article className='errorProduct'>
            <h1 className='errorProduct__message'>❌ This product does'n exist? ❌</h1>
            <img className='errorProduct__img' src="" alt="" />
        </article>
    )
}

export default ErrorProduct