import React from 'react'
import './Marketplace.scss'
import Sort from './Sort/Sort'
import Gallery from './Gallery/Gallery'

const Marketplace = () => {
    return (
        <main className="page__marketplace">
            <Sort />
            <Gallery />
        </main>
    )
}

export default Marketplace
