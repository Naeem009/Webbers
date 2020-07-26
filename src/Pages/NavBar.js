import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className='NavLink'>
                    <NavLink to="/" className='NavLink' exact activeClassName='activelink'>Home</NavLink>
                    <NavLink to="/about" className='NavLink' exact activeClassName='activelink'>About</NavLink>
                    <NavLink to="/services" className='NavLink' exact activeClassName='activelink'>Services</NavLink>
                    <NavLink to="/contacts" className='NavLink' exact activeClassName='activelink'>Contacts</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;
