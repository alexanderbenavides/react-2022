import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='ui raised very padded segment'>
            <label className='ui teal inverted segment'>Gloria</label>
            <div className='ui right floated header'>
                <NavLink to='/'><button className='ui button'>Home</button></NavLink>
                <NavLink to='/about'><button className='ui button'>About</button></NavLink>
                <NavLink to='/contact'><button className='ui button'>Contact</button></NavLink>
                <NavLink to='/cards'><button className='ui button'>Card</button></NavLink>
            </div>
        </nav>
    )
}

export default NavBar;