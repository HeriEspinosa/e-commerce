import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem'
import config from '../utils/getConfig'

const CartPage = () => {

    const { cart } = useSelector(state => state)

    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        const result = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
        setTotalPrice(result)
    }, [cart])

    handlePurchase = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.post(url, {}, config)
            .then(res => {
                console.log(res),
                    dispatch(getAllProductsThunk())
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <div>
                {
                    cart?.map(prodInfo => (
                        <CartItem
                            key={prodInfo.id}
                            prodInfo={prodInfo}
                        />
                    ))
                }
            </div>
            <footer>
                <h2><span>Total: </span><span>{totalPrice}</span></h2>
                <button onClick={handlePurchase} >Buy this Cart</button>
            </footer>
        </div>
    )
}

export default CartPage