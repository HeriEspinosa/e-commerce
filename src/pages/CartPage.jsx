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
                console.log(res),
                    dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div className='cartpages'>
            <div className='cartpages__item'>
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
                <h2 className='cartpages__footer-title'><span>Total: </span><span>{totalPrice}</span></h2>
                <button className='cartpages__footer-btn' onClick={handlePurchase} >Buy this Cart</button>
            </footer>
        </div>
    )
}

export default CartPage