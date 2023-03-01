import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../utils/getConfig'

const PurchasesPage = () => {

    const [purrchases, setPurrchases] = useState()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.get(url, config)
            .then(res => setPurrchases(res.data))
            .catch(err => console.log(err.response))
    }, [])

    return (
        <div>
            <article>
                {
                    purrchases?.map(purchase => (
                        <PurchasesPage
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </article>
        </div>

    )
}

export default PurchasesPage