import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import config from '../../utils/getConfig'

const CartItem = ({ prodInfo }) => {

    const dispatch = useDispatch()

    handleDelete = () => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
        axios.delete(url, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
    }

    return (
        <article>
            <header>
                <img src={prodInfo.product.images[0].url} alt="" />
            </header>
            <div>
                <h4>{prodInfo.product.brand}</h4>
                <h3>{prodInfo.product.title}</h3>
                <ul>
                    <li>
                        <span>Unit Price</span>
                        <span>{prodInfo.prodyct.price}</span>
                    </li>
                    <li>
                        <span>Quantity</span>
                        <span>{prodInfo.quantity}</span>
                    </li>
                </ul>
            </div>
            <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        </article>
    )
}

export default CartItem