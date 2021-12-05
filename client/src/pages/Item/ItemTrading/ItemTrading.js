import React from 'react'
import './ItemTrading.scss'
import Eth from '../../../assets/img/eth.svg'

const ItemTrading = ({ price, external_url }) => {
  return (
    <section className="item__trading">
      <p className="item__trading-price">Current price</p>
      <div className="item__trading-info">
        <span><img className="item__trading-img" alt="Ethereum" src={Eth} /></span>
        <span className="item__trading-display">{price}</span>
        <span className="item__trading-dollar">(345.00 $)</span>
      </div>
      <div className="item__trading-btngroup">
        <a href={external_url} target="_blank" rel="noreferrer" className="item__trading-btnbuy">Buy now</a>
        <button className="item__trading-btnoffer">Make offer</button>
      </div>
    </section>
  )
}

export default ItemTrading
