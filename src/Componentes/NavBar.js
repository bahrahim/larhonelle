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
                    <NavLink to="/" activeClassName="active">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/Products" activeClassName="active">
                        <li>Produits</li>
                    </NavLink>
                    <NavLink to="/About" activeClassName="active">
                        <li>A propos</li>
                    </NavLink>
                    <NavLink to="/Contact" activeClassName="active">
                        <li>Contact</li>
                    </NavLink>
                </ul>
        </div>
        </div>
    );
};

export default NavBar;