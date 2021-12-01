import React from 'react'
import './ItemCounts.scss'
import Parcel from '../../../assets/img/parcel.png'

const ItemCounts = () => {
    return (
        <section className="item__counts">
            <h1 className="item__counts-title">Parcel Name</h1>
            <div className="item__counts-container">
                <div className="item__counts-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>23</span>
                </div>
                <div className="item__counts-img">
                    <img src={Parcel} alt="" />

                </div>
                <div className="item__counts-info">
                    <span>Owned by Milos123545</span>
                    <span className="material-icons-outlined">visibility</span>
                    <span>75000 views</span>
                </div>
            </div>
        </section>
    )
}

export default ItemCounts
