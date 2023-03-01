import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../Home/CardProduct'

const SimilarProducts = ({ category, productId }) => {

    const [filterProducts, setfilterProducts] = useState()

    const { products } = useSelector(state => state)

    useEffect(() => {
        if (products && category) {
            setfilterProducts(products?.filter(product => ((
                product.category.id === category?.id && product.id !== productId))))
        }

    }, [category, products])

    console.log(filterProducts);

    return (
        <div>
            <h2>Discover similar products</h2>
            <div>
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