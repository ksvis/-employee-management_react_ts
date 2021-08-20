import React from 'react';
import  './Header.scss';
import { Navbar } from './Navbar/Navbar';

export const Header: React.FC = () => {

    const navigationItems = [
        { text: 'Home', link: '/' },
        { text: 'Employees', link: '/employees' },
    ];

    return (
        <div className='header'>
            <a href='/'>Logo</a>
            <Navbar
                navigationItems={navigationItems}
            />
        </div>
    )
}