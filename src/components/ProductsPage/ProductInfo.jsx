import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import config from '../../utils/getConfig';

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
                console.log(res.data)
                dispatch(getCartThunk())
                setCounter(1)
            })
            .catch(err => console.log(err.response))
    };

    return (
        <article className='productInfo'>
            <header className='productInfo__header'>
                <img src={product?.images[0].url} alt={product?.title} />
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
                    <div className='productInfo__footer-price-btn'>
                        <div onClick={handleMinus}>-</div>
                        <div>{counter}</div>
                        <div onClick={handleAdd}>+</div>
                    </div>
                </section>
                <button>Add to cart <i className='bx bx-cart'></i></button>
            </footer>
        </article>
    )
}

export default ProductInfo