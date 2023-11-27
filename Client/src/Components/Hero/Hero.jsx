import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import reading from '../Assets/reading.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Button, Navbar, Container } from 'react-bootstrap';

const Hero = () => {

  const CommunityButtonClick = ()=>{
    const whatsappLink = 'https://chat.whatsapp.com/GbeJJXn9bAUJktTS4RUYFq';

    window.location.href = whatsappLink;
  }

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Welcome to LeefLooM.!! <span><img src={hand_icon} alt="hand icon" /></span></h2>
        <div className="hero-hand-icon">
          
        </div>
        <p>Let the magic of books transport you to realms beyond your wildest dreams.</p>
        <button  className="hero-latest-btn" onClick={CommunityButtonClick}>
          <div>Join To Our Community!!</div>
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
      <div className="hero-right d-none d-sm-none d-md-none d-lg-block">
        <img src={reading} alt="" />
      </div>
    </div>
  );
}

export default Hero;
