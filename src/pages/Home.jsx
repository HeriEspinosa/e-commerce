import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import { getProductsByName } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

    const { products } = useSelector(state => state)
    const [categories, setCategories] = useState()

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const input = e.target.search.value.trim().toLowerCase()

        dispatch(getProductsByName(input))
    }

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        axios.get(url)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err.response))
    }, [])

    const handleClickCategory = id => {
        dispatch(getProductsByName(id, true))
    }

    return (
        <div className='home'>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" id='search' />
                <button><i className='bx bx-search-alt-2'></i></button>
            </form>

            <article>
                <header>
                    <h3>Category</h3>
                    <i className='bx bx-chevron-down'></i>
                    <ul>
                        {
                            categories?.map(category => (
                                <li key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
                            ))
                        }
                    </ul>

                </header>

            </article>
            <div className='home_cardproduct'>
                {
                    products?.length === 0 ?
                        <h1>❌ This product does'n exist? ❌</h1>
                        :
                        products?.map(product => (
                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Home