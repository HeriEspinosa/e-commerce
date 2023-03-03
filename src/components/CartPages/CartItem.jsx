import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import { setCounter } from '../../store/slices/counter.slice'
import config from '../../utils/getConfig'
import './styles/cartitem.css'

const CartItem = ({ prodInfo }) => {

    const [displayQuantity, setDisplayQuantity] = useState(prodInfo.quantity)

    const { counter, cart } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleDelete = () => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
        axios.delete(url, config)
            .then(res => {
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
    }

    const handleUpdate = () => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
        const data = {
            quantity: displayQuantity
        }
        axios.put(url, data, config)
            .then(res => {
                dispatch(getCartThunk())
                dispatch(setCounter(1))
            })
            .catch(err => console.log(err.response))
    };

    const handleAdd = () => {
        setDisplayQuantity(displayQuantity + 1)
    };

    const handleMinus = () => {
        if (prodInfo.quantity - 1 >= 1) {
            setDisplayQuantity(displayQuantity - 1)
        }
    };


    return (
        <article className='cartItem'>
            <header className='cartItem__header'>
                <img src={prodInfo.product.images[0].url} alt="" />
            </header>
            <div className='cartItem__body'>
                <div>
                    <h5 className='cartItem__body-title'>{prodInfo.product.title}</h5>
                    <ul className='cartItem__body-list'>
                        <li className='cartItem__body-list-quantity'>
                            <div className='cartItem__body-counter letter_Mynerve '>
                                <div className='cartItem__body-counter-group'>
                                    <div className='cartItem__body-counter-minus' onClick={handleMinus} >-</div>
                                    <div className='cartItem__body-counter-number'>{displayQuantity}</div>
                                    <div className='cartItem__body-counter-plus' onClick={handleAdd}>+</div>
                                </div>
                                <div>
                                    <button onClick={handleUpdate} className='productInfo__footer-counter-update letter_Neon' >Update</button>
                                </div>
                            </div>
                        </li>
                        <li className='cartItem__body-list-price letter_Neon'>
                            <span>Unit Price:</span>
                            <span>$ {prodInfo.product.price}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='cartItem__btn' onClick={handleDelete}><i className='bx bx-trash'></i></button>
                </div>
            </div>
        </article>
    )
}

export default CartItem