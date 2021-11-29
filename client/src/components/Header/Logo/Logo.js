import React from 'react';
import { Link } from 'react-router-dom';
import LogoMetanet from '../../../assets/img/logo.svg'
import './Logo.scss';

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <img src={LogoMetanet} alt='Metanet Logo' />
            </Link>
        </div>
    )
}

export default Logo
