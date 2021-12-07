import React, { useState } from 'react'
import './Marketplace.scss'
import Sort from './Sort/Sort'
import Gallery from './Gallery/Gallery'

const Marketplace = () => {
    const [isGridView, setGridView] = useState(false);

    return (
        <main className="page__marketplace">
            <Sort isGridView={isGridView} setGridView={setGridView}/>
            <Gallery isGridView={isGridView} />
        </main>
    )
}

export default Marketplace
