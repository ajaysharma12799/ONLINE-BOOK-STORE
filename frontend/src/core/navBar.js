import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const navBar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand font-weight-bold font-italic" to="/">Online Book Store</Link>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <Link className="nav-link text-white font-weight-bold" to='/'> Home </Link>    
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-white font-weight-bold" to='/cart'> Cart </Link>    
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-white font-weight-bold" to='/user/dashboard'> User-Dashboard </Link>    
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-white font-weight-bold" to='/admin/dashboard'> Admin-Dashboard </Link>    
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-white font-weight-bold" to='/signup'> Signup </Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-white font-weight-bold" to='/signin'> Signin </Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-white font-weight-bold" to='/signout'> Signout </Link>    
            </li>
        </ul>
        </nav>
    </div>
)

export default withRouter(navBar);