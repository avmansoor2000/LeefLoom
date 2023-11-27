import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menu , setMenu] = useState("shop")

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="container-fluid">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>LeefLooM.</p>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${menuVisible ? 'change' : ''}`}></div>
          <div className={`bar ${menuVisible ? 'change' : ''}`}></div>
          <div className={`bar ${menuVisible ? 'change' : ''}`}></div>
        </div>
        <ul className={`nav-menu ${menuVisible ? 'active' : ''}`}>
          <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration:"none"}} to={'/'}>HOME</Link> {menu==="home"?<hr/>:<></>}</li>
          <li  onClick={()=>{setMenu("fiction")}}> <Link style={{textDecoration:"none"}} to={'/fiction'}>FICTION</Link> {menu==="fiction"?<hr/>:<></>}</li>
          <li  onClick={()=>{setMenu("non-fiction")}}> <Link style={{textDecoration:"none"}} to={'/non-fiction'}>NON-FICTION</Link> {menu==="non-fiction"?<hr/>:<></>}</li>
          <li  onClick={()=>{setMenu("business")}}> <Link style={{textDecoration:"none"}} to={'/business'}>BUSINESS</Link> {menu==="business"?<hr/>:<></>}</li>
          
        </ul>
        <div className="nav-login-cart">
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
          <Link to={'/cart'}>
            <img src={cart_icon} alt="cart-icon" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
