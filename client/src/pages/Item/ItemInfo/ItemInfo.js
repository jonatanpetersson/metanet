import React from 'react'
import './ItemInfo.scss'

const ItemInfo = ({ description, suburb, island }) => {
    return (
      <section className="item__info">
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Suburb</h3>
        <p>{suburb}</p>
        <h3>island</h3>
        <p>{island}</p>
      </section>
    )
}

export default ItemInfo
