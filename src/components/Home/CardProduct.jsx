import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/cardproduct.css'

const CardProduct = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

        const data = {
            quantity: 1,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                console.log(res.data);
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
        e.stopPropagation()
    }

    return (
        <article className='cardproduct letter_Cabin' onClick={handleClick}>
            <header className='cardproduct__header'>
                <img src={product.images[0].url} alt="" />
            </header>
            <section className='cardproduct__container'>
                <header lassName='cardproduct__container-header'>
                    <h4>{product.brand}</h4>
                    <h4>{product.title}</h4>
                </header>
                <div lassName='cardproduct__container-price'>
                    <div>Price</div>
                    <div>{product.price}</div>
                </div>
                <button lassName='cardproduct__container-btn' onClick={handleBtnClick}><i className='bx bx-cart'></i></button>
            </section>
        </article>
    )
}

export default CardProduct