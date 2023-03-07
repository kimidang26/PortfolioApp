import React, {useState} from 'react';
import {  Link } from "react-router-dom";
import "./Topnav.css";



const Topnav = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='navbar'>
      <h3 className='logo'>Logo</h3>
      <ul className= {isMobile ? "nav-links-mobile": 'nav-links'}
      onClick={() => setIsMobile(false )}
      >
        <Link to="/" className='home'>
            <li>Home</li>
        </Link>
        <Link to="/runinfo" className='aboutme'>
            <li>Training</li>
        </Link>
        <Link to="/projects" className='projects'>
            <li>Projects</li>
        </Link>
        <Link to="/socialmedia" className='socialmedia'>
            <li>Social Media</li>
        </Link>
        <Link to="/contact" className='contact'>
            <li>Contact Me</li>
        </Link>

      </ul>
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
          
            {isMobile ? (
            <i className='fa fa-times'></i>
            ): (
            <i className='fa fa-bars'></i>
            )}
        </button>
    </nav>
    
  )
}

export default Topnav;
