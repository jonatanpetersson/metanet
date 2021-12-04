import React from 'react'
import './ItemCounts.scss'

const ItemCounts = ({ name, image, user }) => {
    return (
        <section className="item__counts">
            <h1 className="item__counts-title">{name}</h1>
            <div className="item__counts-container">
                <div className="item__counts-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>23</span>
                </div>
                <div className="item__counts-img">
                    <img src={image} alt="" />

                </div>
                <div className="item__counts-info">
                    <span>Owned by {user}</span>
                    <span className="material-icons-outlined">visibility</span>
                    <span>75000 views</span>
                </div>
            </div>
        </section>
    )
}

export default ItemCounts
