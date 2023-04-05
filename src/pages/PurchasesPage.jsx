import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'
import config from '../utils/getConfig'
import './styles/purchasespage.css'

const PurchasesPage = () => {

    const [purchases, setPurrchases] = useState()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.get(url, config)
            .then(res => setPurrchases(res.data))
            .catch(err => console.log(err.response))
    }, [])

    return (
        <div className='purchasesPage'>
            <div className="purchasesPage__left flex">
            <div className="">
                    <img src="/thanksbuy.gif" alt="Amazon" />
                </div>
                <h3>Nuestras tiendas</h3>
                <div className="purchasesPage__left-tienda">
                    <h5>Amazon</h5>
                    <img src="/amazon.png" alt="Amazon" />
                </div>
                <div className="purchasesPage__left-tienda">
                    <h5>Ebay</h5>
                    <img src="/ebay.png" alt="ebay" />
                </div>
                <div className="purchasesPage__left-tienda">
                    <h5>Bestbuy</h5>
                    <img src="/bestbuy.png" alt="bestbuy" />
                </div>
                <div className="purchasesPage__left-tienda">
                    <h5>Myus</h5>
                    <img src="/myus.png" alt="myus" />
                </div>
                <div className="purchasesPage__left-tienda">
                    <h5>Walmart</h5>
                    <img src="/walmart.png" alt="walmart" />
                </div>
            </div>
            <div className="purchasesPage__right flex">
                <div className="purchasesPage__searh">
                    <ul className='purchasesPage__header-ul'>
                        <li>All</li>
                        <li>TV</li>
                        <li>Phone</li>
                        <li>Laptop</li>
                    </ul>
                </div>
                
                <div className='purchasesPage__item flex'>
                    {
                        purchases?.map(purchase => (
                            <PurchaseCard
                                key={purchase.id}
                                purchase={purchase}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default PurchasesPage