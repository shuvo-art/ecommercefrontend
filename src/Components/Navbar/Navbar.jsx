import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

     const {getTotalCartItems} = React.useContext(ShopContext);

    return (
        <div className='navbar'>
            <Link style={{textDecoration: 'none'}} to='/'>
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>SHOPPER</p>
                </div>
            </Link>

            <div className="nav-search">
                <form className="search-form">
                    <input className="form-input" type="search" placeholder="Search" aria-label="Search" />
                    <button className="form-button" type="submit">Search</button>
                </form>
            </div>
            <div className="nav-login-cart">
                <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                
                {localStorage.getItem('auth-token') 
                ? <button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                : <Link to='/login'><button>Login</button></Link>}
                
            </div>
        </div>
    )
}

export default Navbar