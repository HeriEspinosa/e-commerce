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
            <div className='purchasesPage__item'>
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

    )
}

export default PurchasesPage