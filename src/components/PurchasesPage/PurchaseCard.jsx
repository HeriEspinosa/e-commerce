import React from 'react'

const PurchaseCard = ({ purchase }) => {
    return (
        <article className='purchase'>
            <header className='purchase__header'>
                <img src={purchase.product.imagenes[0].url} alt="product" />
            </header>
            <h3>{purchase.product.title}</h3>
            <div className='purchase__quantity'>{purchase.quantity}</div>
            <div className='purchase__price'>{purchase.product.price}</div>
        </article>
    )
}

export default PurchaseCard