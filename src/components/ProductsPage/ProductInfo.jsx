import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../../store/slices/cart.slice';
import config from '../../utils/getConfig';
import './styles/productinfo.css'

const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const dispatch = useDispatch()

    const handleAdd = () => {
        setCounter(counter + 1)
    };

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    };

    const handleAddCart = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: counter,
            productId: product.id
        }
        axios.post(url, data, config)
            .then(res => {
                dispatch(getCartThunk())
                setCounter(1)
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
                    <h4>Price</h4>
                    <span>{product?.price}</span>
                </section>
                <section className='productInfo__footer-quantity'>
                    <h4>Quantity</h4>
                    <div className='productInfo__footer-counter letter_Mynerve '>
                        <div className='productInfo__footer-counter-minus' onClick={handleMinus}>-</div>
                        <div className='productInfo__footer-counter-number'>{counter}</div>
                        <div className='productInfo__footer-counter-plus' onClick={handleAdd}>+</div>
                    </div>
                </section>
                <button onClick={handleAddCart} className='productInfo__footer-btn' >Add to cart <i className='bx bx-cart'></i></button>
            </footer>
        </article>
    )
}

export default ProductInfo