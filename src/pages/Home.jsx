import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import ErrorProduct from '../components/Home/ErrorProduct'
import { getAllProductsThunk, getProductsByName } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

    const { products } = useSelector(state => state)
    const [categories, setCategories] = useState()
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

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

    const handleSubmitPrice = e => {
        e.preventDefault()
        const from = Number(e.target.from.value.trim())
        const to = Number(e.target.to.value.trim())

        if (from && to) {
            setFromTo({ from, to })
        } else if (from && !to) {
            setFromTo({ from, to: Infinity })
        } else if (!from && to) {
            setFromTo({ from: 0, to })
        } else {
            setFromTo({ from: 0, to: Infinity })
        }
    }

    const filterProducts = product => +product.price >= fromTo.from && +product.price <= fromTo.to

    return (
        <div className='home'>
            <article className='home__filter'>
                <section className='filter__price'>
                    <header className='filter__price-header' >
                        <h4>Price</h4>
                        <i className='bx bx-chevron-down'></i>
                    </header>

                    <form className='filter__price-form' action="" onSubmit={handleSubmitPrice}>
                        <div className='price__from'>
                            <label htmlFor="from">From</label>
                            <input type="number" id='from' placeholder='$Min' />
                        </div>
                        <div className='price__to'>
                            <label htmlFor="to">To</label>
                            <input type="number" id='to' placeholder='$Max' />
                        </div>
                        <button className='price__btn letter_Mynerve'>Filter Price</button>
                    </form>
                </section>

                <section className='filter__category'>
                    <header className='filter__category-header'>
                        <h4>Category</h4>
                        <i className='bx bx-chevron-down'></i>
                    </header>
                    <ul className='filter__category-list'>
                        <li onClick={() => dispatch(getAllProductsThunk())}>All Products</li>
                        {
                            categories?.map(category => (
                                <li key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
                            ))
                        }
                    </ul>
                </section>
            </article>

            <div className='home__product'>
                <form className='home__search flex' autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" id='search' placeholder='What are you looking for?' />
                    <button><i className='bx bx-search-alt-2'></i></button>
                </form>
                <div className='home__product-card flex'>

                    {
                        products?.length === 0 ?
                            <ErrorProduct />
                            :
                            products?.filter(filterProducts).map(product => (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home