import React from 'react'
import ItemSocial from './ItemSocial/ItemSocial'
import ItemCounts from './ItemCounts/ItemCounts'
import ItemTrading from './ItemTrading/ItemTrading'
import ItemInfo from './ItemInfo/ItemInfo'
import './Item.scss'

const Item = () => {
    return (
        <main className="page__item">
            <ItemSocial />
            <ItemCounts />
            <ItemTrading />
            <ItemInfo />

        </main>
    )
}

export default Item
