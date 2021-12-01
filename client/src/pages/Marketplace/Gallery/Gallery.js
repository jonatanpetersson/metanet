import React from 'react'
import './Gallery.scss'
import parcel from '../../../assets/img/parcel.png'

const Gallery = () => {
  return (
    <section className="gallery" >
      <ul className="gallery__wrapper">
        <li className="gallery__wrapper-item" >
          <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>
        </li>
        <li className="gallery__wrapper-item" >
        <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>
        </li>
        <li className="gallery__wrapper-item" >
        <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>

        </li>
        <li className="gallery__wrapper-item" >
        <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>

        </li>

      </ul>
    </section>
  )
}

export default Gallery
