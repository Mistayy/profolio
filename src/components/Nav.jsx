import { NavLink } from 'react-router-dom';
import React from 'react';

const Nav = ({ handleShowHideNav }) => {

    const closeNav = (e) => {
        if( window.innerWidth < 600){
            handleShowHideNav();
        } else {
            e.target.blur();
        }


    }

    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/" >Projects</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/" >Contact</NavLink></li>
            </ul>
        </nav>
    );

};

export default Nav;
