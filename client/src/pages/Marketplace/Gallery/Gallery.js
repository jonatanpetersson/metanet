import React from 'react'
import './Gallery.scss'
import parcel from '../../../assets/img/parcel.png'

const Gallery = () => {
    return (
        <section className="gallery" >
            <ul className="gallery__wrapper">
                <li className="gallery__wrapper-item" >
                    <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
                    <div >
                        <span>Decentraland</span>
                        <span className="material-icons-outlined">verified</span>
                        <span>Price</span>
                    </div>
                    <div>
                        <span>Owner ID</span>
                        <span>10.000</span>
                    </div>
                    <div>
                    <span className="material-icons-outlined">favorite_border</span>
                        <span>75</span>
                    </div>

                    </li>
                <li className="gallery__wrapper-item" >2</li>
                <li className="gallery__wrapper-item" >3</li>
                <li className="gallery__wrapper-item" >4</li>
                <li className="gallery__wrapper-item" >5</li>
            </ul>
        </section>
    )
}

export default Gallery
