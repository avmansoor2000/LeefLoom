import React from 'react'
import './footer.css'
import logo from'../Assets/logo.jpg'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-box">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={logo} alt="" />
                        </div>
                        <h2>LeefLooM.</h2>
                    </div>
                    <p>Welcome to LeefLooM, where the love for literature meets unparalleled service. At our bookstore, we are dedicated to providing book enthusiasts with a diverse and carefully curated selection of titles that cater to every taste and interest.</p>

                </div>
                <div className="footer-box">
                    <h4 className='footer-title'>Company</h4>
                    <ul className='footer-links'>
                    <li> <a href="">Our Programs</a></li>
                    <li><a href="">Our plan</a></li>
                    <li><a href="">Become a member</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                <h4 className='footer-title'> Quick Links</h4>
                <ul className='footer-links'>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Support</a></li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
