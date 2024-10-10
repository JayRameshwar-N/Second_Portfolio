import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css'; // Custom CSS file for styling

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="portfolio-container">
      <div className="intro-box">
        <header className="intro-header">
          <h1 className="intro-title">ᏂᎥ Ꭵ'Ꮇ <span className='ram'>𝓡𝓪𝓶𝓮𝓼𝓱𝔀𝓪𝓻 ♔ </span></h1>
          <p className="intro-subtitle">I am a skilled web developer</p>
        </header>
        <blockquote className="intro-tagline">
          <p>"Transforming ideas into reality through code."</p>
        </blockquote>
      </div>

      {/* Burger Menu */}
      <nav className="burger-menu">
        <button className="burger-button" onClick={toggleMenu}>
          ☰ {/* Burger Icon */}
        </button>
        {isOpen && (
          <ul className="menu">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className={location.pathname === "/experience" ? "active" : ""}>
              <Link to="/experience" onClick={toggleMenu}>Experience</Link>
            </li>
            <li className={location.pathname === "/Project" ? "active" : ""}>
              <Link to="/Project" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className={location.pathname === "/skills" ? "active" : ""}>
              <Link to="/skills" onClick={toggleMenu}>Skills</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Social Media Links with Local Images */}
      <div className='laptop'>
        <div className='box'>
          <h3 className='laptopName'>ᵣₐᗰₑ𝘀𝓱wₐᵣ</h3>
          <div className="sociaL">
            <a href="https://www.linkedin.com/in/rameshwarnavathar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="link">
              <img src="https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/linkedin-blue-logo-icon.png" alt="LinkedIn" className="social-icon"/>
            </a>
            <a href="https://leetcode.com/u/rameshwarjayhanuman99/" className="link">
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp" alt="LeetCode" className="social-icon"/>
            </a>
            <a 
              href="#" 
              className="link" 
              onClick={() => {
                const email = "rameshwarsahebrao72@gmail.com"; 
                alert(`My email ID is: ${email}`);
              }}
            >
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Gmail" className="social-icon"/>
            </a>
            <a href="https://github.com/JayRameshwar-N" className="link">
              <img src="https://cdn.icon-icons.com/icons2/3007/PNG/512/github_logo_icon_188438.png" alt="GitHub" className="social-icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
