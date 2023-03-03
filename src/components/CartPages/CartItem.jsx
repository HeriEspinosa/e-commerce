import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'

const CartItem = ({ prodInfo }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
        axios.delete(url, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
    }

    return (
        <article className='cartItem'>
            <header className='cartItem__header'>
                <img src={prodInfo.product.images[0].url} alt="" />
            </header>
            <div className='cartItem__body'>
                <h4 className='cartItem__body-brand'>{prodInfo.product.brand}</h4>
                <h3 className='cartItem__body-title'>{prodInfo.product.title}</h3>
                <ul className='cartItem__body-list'>
                    <li className='cartItem__body-list-price'>
                        <span>Unit Price</span>
                        <span>{prodInfo.product.price}</span>
                    </li>
                    <li className='cartItem__body-list-quantity'>
                        <div className='cartItem__body-list-quantity-info'>
                            <span>Quantity</span>
                            <span>{prodInfo.quantity}</span>
                        </div>
                        <div className='cartItem__body-list-quantity-btn'>
                            <button>-</button>
                            <button>+</button>
                        </div>

                    </li>
                </ul>
            </div>
            <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        </article>
    )
}

export default CartItem