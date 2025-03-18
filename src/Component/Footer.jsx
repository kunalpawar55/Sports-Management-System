import React from "react";
import "../CSS/Footer1.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitch, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <h1 style={{color:'white'}}>SportsHere<span style={{ color: 'red' }}>.com</span></h1>
        </div>
        
        <footer className="footer-link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Find">Find</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>       
            <li><Link to="/Sign-up">Sign Up</Link></li>         
            <li><Link to="/Addtournament">Add Tournament</Link></li>
          </ul>
        </footer>

        <div className="social">
          <a href="https://www.instagram.com/your_profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" style={{  margin: '0 10px' }} />
          </a>
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon"  style={{  margin: '0 10px' }} />
          </a>
          <a href="https://twitter.com/your_profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" style={{  margin: '0 10px' }} />
          </a>
          <a href="https://www.twitch.tv/your_channel" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitch} size="2x" className="icon" style={{  margin: '0 10px' }} />
          </a>
        </div>
        <span style={{color:'red',padding:'20px'}}>All rights reserved 2025 © SportsHere.com</span>

      </div>
    </div>
  );
}
