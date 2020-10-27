
import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <div className="header">
                <div className='logo'>
                <NavLink className='header-logo' to='/'>Blog App</NavLink>
                </div>
                <div className='blog-links'>
                    <NavLink className="link" to="/add-post">Create Blog</NavLink>
                </div>
            </div>
       </nav>
    )
}

export default Nav