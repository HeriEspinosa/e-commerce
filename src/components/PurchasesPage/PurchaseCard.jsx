import React from 'react'
import './styles/purchasecard.css'

const PurchaseCard = ({ purchase }) => {

    return (
        <article className='purchase'>
            <header className='purchase__header'>
                <img src={purchase?.product.images[0].url} alt="product" />
            </header>
            <h3>{purchase.product.title}</h3>
            <div className='purchase__quantity'>{purchase?.quantity}</div>
            <div className='purchase__price'>{purchase?.product.price}/each</div>
        </article>
    )
}

export default PurchaseCard