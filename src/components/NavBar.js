import React from 'react';
import { NavLink } from 'react-router-dom';
import  './navbar.css';
const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/'><button className='btn btn-outline'>Home</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about'><button className='btn btn-outline'>About</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contact'><button className='btn btn-outline'>Contact</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/users'><button className='btn btn-outline'>Users</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/cards'><button className='btn btn-outline'>Cards</button></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;