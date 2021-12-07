import React from 'react'
import './Parcel.scss';
import './Parcel.scss';
import image from '../../../../../assets/img/parcel.png';

export const Parcel = () => {
    return (
        <>
        <li className="parcel parcel__wrapper-item" >
            <img className="parcel__wrapper-img" src={image} alt="Parcel" />
            <div className="parcel__wrapper__item" >
                <div className="parcel__wrapper__item-info" >
                <div>
                    <span>decental</span>
                    <span className="verified-icons-color verified-icons-size material-icons-outlined">verified</span>
                </div>
                <div>milostane</div>
                </div>
                <div className="parcel__wrapper__item-info">
                <div>Price</div>
                <div>750</div>
                </div>
            </div>
            <footer className="parcel__wrapper__footer">
                <div className="parcel__wrapper__footer-fav">
                <span className=" verified-icons-size material-icons-outlined">favorite_border</span>
                <span>75</span>
                </div>
            </footer>
        </li>

        {/* remove rest of li */}
        <li className="parcel parcel__wrapper-item" >
            <img className="parcel__wrapper-img" src={image} alt="Parcel" />
            <div className="parcel__wrapper__item" >
                <div className="parcel__wrapper__item-info" >
                <div>
                    <span>decental</span>
                    <span className="verified-icons-color verified-icons-size material-icons-outlined">verified</span>
                </div>
                <div>milostane</div>
                </div>
                <div className="parcel__wrapper__item-info">
                <div>Price</div>
                <div>750</div>
                </div>
            </div>
            <footer className="parcel__wrapper__footer">
                <div className="parcel__wrapper__footer-fav">
                <span className=" verified-icons-size material-icons-outlined">favorite_border</span>
                <span>75</span>
                </div>
            </footer>
        </li>
        <li className="parcel parcel__wrapper-item" >
            <img className="parcel__wrapper-img" src={image} alt="Parcel" />
            <div className="parcel__wrapper__item" >
                <div className="parcel__wrapper__item-info" >
                <div>
                    <span>decental</span>
                    <span className="verified-icons-color verified-icons-size material-icons-outlined">verified</span>
                </div>
                <div>milostane</div>
                </div>
                <div className="parcel__wrapper__item-info">
                <div>Price</div>
                <div>750</div>
                </div>
            </div>
            <footer className="parcel__wrapper__footer">
                <div className="parcel__wrapper__footer-fav">
                <span className=" verified-icons-size material-icons-outlined">favorite_border</span>
                <span>75</span>
                </div>
            </footer>
        </li>
        <li className="parcel parcel__wrapper-item" >
            <img className="parcel__wrapper-img" src={image} alt="Parcel" />
            <div className="parcel__wrapper__item" >
                <div className="parcel__wrapper__item-info" >
                <div>
                    <span>decental</span>
                    <span className="verified-icons-color verified-icons-size material-icons-outlined">verified</span>
                </div>
                <div>milostane</div>
                </div>
                <div className="parcel__wrapper__item-info">
                <div>Price</div>
                <div>750</div>
                </div>
            </div>
            <footer className="parcel__wrapper__footer">
                <div className="parcel__wrapper__footer-fav">
                <span className=" verified-icons-size material-icons-outlined">favorite_border</span>
                <span>75</span>
                </div>
            </footer>
        </li>
        </>
    )
}
