import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <Link to="/">
            <div className='logo'></div>
            </Link>
        <div className='navigation'>
                <ul className='Nav'>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/Products">
                        <li>Produits</li>
                    </NavLink>
                    <NavLink to="/About">
                        <li>A propos</li>
                    </NavLink>
                    <NavLink to="/Contact">
                        <li>Contact</li>
                    </NavLink>
                </ul>
        </div>
        </div>
    );
};

export default NavBar;