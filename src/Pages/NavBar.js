import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from './../Images/Asset.png'

function NavBar() {

    return (
        <div>
            <div className="container-fluid nav_bg bg-primary">
                <div className='row bg-primary'>
                    <div className='col-10 mx-auto bg-primary'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                            <a className="navbar-brand bg-primary" href="http://www.webbers.com.pk" target='_blank' rel='noreferrer noopener nofollow'>
                                <img src={logo1} alt='webbers' height='50px' />
                            </a>
                            <button className="navbar-toggler bg-primary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon bg-primary"></span>
                            </button>

                            <div className="collapse navbar-collapse navbar-brand navbar-dark bg-primary" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto bg-primary">
                                    <li className="nav-item">
                                        <NavLink exact
                                            to="/"
                                            activeClassName='nav_active'
                                            className="nav-link">
                                            Home <span className="sr-only">
                                                (current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact to="/about"
                                            activeClassName='nav_active'
                                            className="nav-link" >
                                            About us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact to="/services"
                                            activeClassName='nav_active'
                                            className="nav-link">
                                            Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact to="/contacts"
                                            activeClassName='nav_active'
                                            className="nav-link">
                                            Contacts</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default NavBar;
