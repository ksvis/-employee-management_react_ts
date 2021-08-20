import React from 'react';
import  './HomePage.scss';

export const HomePage: React.FC = ( ) => {

    return (
        <div className='home-page__container'>
            <h1>Our mission is to help people</h1>
            <div className='home-page__info-circle-block--medium'>
                <h5>Company description company description company description company description company description</h5>
            </div>
            <div className='home-page__info-circle-block--big'>
                <h5>Company description company description company description company description company description
                    company description company description</h5>
            </div>
            <div className='home-page__info-circle-block--small'>
                <h5>Company description company</h5>
            </div>
            <div className='home-page__info-rectangle-block'>
                <h5>Company description company description company description company description company description
                    company description company description</h5>
            </div>
        </div>
    )
}
