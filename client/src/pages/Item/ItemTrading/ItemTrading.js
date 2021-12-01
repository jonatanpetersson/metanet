import React from 'react'
import './ItemTrading.scss'

const ItemTrading = () => {
  return (
    <section className="item__trading">
      <p className="item__trading-price">Current price</p>
      <div className="item__trading-info">
        <span className="material-icons-outlined">euro</span>
        <span className="item__trading-display">5555</span>
        <span className="item__trading-dollar">(345.00 $)</span>
      </div>
      <div className="item__trading-btngroup">
        <button className="item__trading-btnbuy">buy Now</button>
        <button className="item__trading-btnoffer">Make offer</button>
      </div>
    </section>
  )
}

export default ItemTrading
