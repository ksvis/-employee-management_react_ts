import React from 'react';
import { NavLink } from 'react-router-dom';
import  './Navbar.scss';

interface NavbarProps { navigationItems: { text: string; link: string; }[]; }

export const Navbar: React.FC<NavbarProps> = ({navigationItems}) => {

    const navigationMenu = navigationItems?.map(item => {
        return (
            <NavLink
                exact
                to={item.link}
                key={`${item.link}${item.text}`}
                className="link"
            >
                {item.text}
            </NavLink>
        )
    })

    return (
        <nav className='navbar'>
            {navigationMenu}
        </nav>
    )
}
