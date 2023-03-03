import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem'
import { getCartThunk } from '../store/slices/cart.slice'
import config from '../utils/getConfig'
import './styles/cartpage.css'

const CartPage = () => {

    const { cart } = useSelector(state => state)

    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        const result = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
        setTotalPrice(result)
    }, [cart])

    const handlePurchase = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.post(url, {}, config)
            .then(res => {
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div className='cartpages'>
            <div className='cartpages__item'>
                <h5 className='shopping__close letter_Neon'>❌</h5>
                <h6 className='shopping__cart letter_Neon'>shopping cart</h6>
                {
                    cart?.map(prodInfo => (
                        <CartItem
                            key={prodInfo.id}
                            prodInfo={prodInfo}
                        />
                    ))
                }

            </div>
            <footer className='cartpages__footer'>
                <h4 className='cartpages__footer-title letter_Neon'>Total: <span>$ {totalPrice}</span></h4>
                <button className='cartpages__footer-btn' onClick={handlePurchase} >Checkout</button>
            </footer>
        </div>
    )
}

export default CartPage