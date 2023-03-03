import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../Home/CardProduct'
import './styles/similarproducts.css'

const SimilarProducts = ({ category, productId }) => {

    const [filterProducts, setfilterProducts] = useState()

    const { products } = useSelector(state => state)

    useEffect(() => {
        if (products && category) {
            setfilterProducts(products?.filter(product => ((
                product.category.id === category?.id && product.id !== productId))))
        }

    }, [category, products])

    return (
        <div className='similarProducts'>
            <h5>Discover similar products</h5>
            <div className='similarProducts__item'>
                {
                    filterProducts?.map(filterProduct => (
                        <CardProduct
                            key={filterProduct.id}
                            product={filterProduct}
                        />))
                }
            </div>
        </div>
    )
}

export default SimilarProducts