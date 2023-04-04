import React from 'react'
import './styles/purchasecard.css'

const PurchaseCard = ({ purchase }) => {

    return (
        <article className='purchase flex'>
            <header className='purchase__header'>
                <img src={purchase?.product.images[2].url} alt="product" />
                <h4>{purchase.product.title}</h4>
            </header>
            <div className="purchase__info">
                <div className='purchase__quantity'>quantity: {purchase?.quantity}</div>
            <div className='purchase__price'>{purchase?.product.price}/each</div>
            </div>
            
        </article>
    )
}

export default PurchaseCard