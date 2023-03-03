import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../../store/slices/cart.slice';
import { setCounter } from '../../store/slices/counter.slice';
import config from '../../utils/getConfig';
import Counter from '../Home/Counter';
import './styles/productinfo.css'

const ProductInfo = ({ product }) => {

    const { counter } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleAddCart = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: counter,
            productId: product.id
        }
        axios.post(url, data, config)
            .then(res => {
                dispatch(getCartThunk())
                dispatch(setCounter(1))
            })
            .catch(err => console.log(err.response))
    };

    return (
        <article className='productInfo'>
            <header className='productInfo__header'>
            </header>
            <h3 className='productInfo__brand'>{product?.brand}</h3>
            <h2 className='productInfo__title'>{product?.title}</h2>
            <p className='productInfo__description'>{product?.description}</p>
            <footer className='productInfo__footer'>
                <section className='productInfo__footer-price'>
                    <h6 className='letter_Neon'>Price</h6>
                    <span>$ {product?.price}</span>
                </section>
                <section className='productInfo__footer-quantity'>
                    <h6 className='letter_Neon'>Quantity</h6>
                    <Counter />
                </section>
            </footer>
            <button onClick={handleAddCart} className='productInfo__footer-btn' >Add to cart <i className='bx bx-cart'></i></button>
        </article>
    )
}

export default ProductInfo