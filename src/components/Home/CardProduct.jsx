import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/cardproduct.css'

const CardProduct = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { cart } = useSelector(state => state)

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        e.stopPropagation()

        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: 1,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => dispatch(getCartThunk()))
            .catch(err => {
                console.log(err.response)

                if (err.response.data.error === "Product already added to cart") {

                    const idProductCart = cart.filter(item => item.productId === product.id)
                    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${idProductCart[0].id}/`
                    const data = {
                        quantity: +idProductCart[0].quantity + 1
                    }

                    axios.put(url, data, config)
                        .then(res => dispatch(getCartThunk()))
                        .catch(err => console.log(err.response))
                }
            })
    }


    return (
        <article className='cardproduct letter_Cabin' onClick={handleClick}>
            <header className='cardproduct__header'>
                <img src={product.images[0].url} alt="" />
            </header>
            <section className='cardproduct__container'>
                <header className='cardproduct__container-header'>
                    <h4>{product.brand}</h4>
                    <h4>{product.title}</h4>
                </header>
                <div className='cardproduct__container-price'>
                    <div>Price</div>
                    <div>{product.price}</div>
                </div>
                <button className='cardproduct__container-btn' onClick={handleBtnClick}>
                    <i className='bx bx-cart'></i>
                </button>
            </section>
        </article>
    )
}

export default CardProduct