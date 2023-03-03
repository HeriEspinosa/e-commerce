import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductsPage/ProductInfo'
import SimilarProducts from '../components/ProductsPage/SimilarProducts'
import SliderImgs from '../components/ProductsPage/SliderImgs'
import './styles/productPage.css'

const ProductPage = () => {

    const { id } = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
        axios.get(url)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err.response))
    }, [id])

    return (
        <div className='productPage'>
            <div className='productPage__header'>
                <h6>Home</h6>
                <div className='separator'></div>
                <h6 className='productName'>{product?.title}</h6>
            </div>
            <article className='productPage__body'>
                <div className='productPage__slider'>
                    <SliderImgs product={product} />
                </div>
                <div className='productPage__product'>
                    <ProductInfo product={product} />
                </div>
                <div className='productPage__similar'>
                    <SimilarProducts
                        category={product?.category}
                        productId={product?.id}
                    />
                </div>
            </article>
        </div>
    )
}

export default ProductPage