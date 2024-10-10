import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email via EmailJS
    emailjs.send('service_4bqz6ng', 'template_edbzxyi', formData, 'qNaB41peIU0UlM_hI') // Replace with actual User ID
      .then((result) => {
        console.log('Email successfully sent!', result.status, result.text);
        setEmailSent(true);
        setShowPopup(true);
        setEmailError(null);
      }, (error) => {
        console.log('Failed to send email.', error);
        setEmailError('Failed to send email. Please try again later.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLikeClick = () => {
    setLiked(true);
    setHideContent(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Burger Menu */}
      <nav className="burger-menu">
        <button className="burger-button" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
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
            <li className={location.pathname === "/projects" ? "active" : ""}> {/* Updated path */}
              <Link to="/projects" onClick={toggleMenu}>Projects</Link>
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

      {/* Contact Form with Like Button */}
      <div className="contact-container">
        {!hideContent && (
          <div className="contact-form-wrapper">
            <h1 className="contact-title">
              <span className="first-half">Contact</span> <span className="second-half">Us</span>
            </h1>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-label" htmlFor="name">
                Name:
              </label>
              <input
                className="contact-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                aria-label="Enter your name"
              />

              <label className="contact-label" htmlFor="email">
                Email:
              </label>
              <input
                className="contact-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                aria-label="Enter your email"
              />

              <label className="contact-label" htmlFor="message">
                Message:
              </label>
              <textarea
                className="contact-textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                aria-label="Enter your message"
              ></textarea>

              <button className="contact-button" type="submit">
                Send Message
              </button>
            </form>

            <div className="like-section">
              <button className="like-button" onClick={handleLikeClick} aria-label="Like this">
                <img 
                  src="https://i.pinimg.com/originals/de/17/8a/de178aa9a890a5875eaa5343ae595a74.gif"
                  alt="Like"
                  className="like-image"
                />
              </button>
            </div>
          </div>
        )}

        {liked && (
          <p className="greeting-message">
            ᵀʰᵃⁿᵏ ʸᵒᵘ ᶠᵒʳ ˡⁱᵏⁱⁿᵍ ! <br />
            "ᴵ ˢⁱⁿᶜᵉʳᵉˡʸ ᵃᵖᵖʳᵉᶜⁱᵏᵉ ʸᵒᵘ ᵗᵃᵏⁱⁿᵍ ᵗʰᵉ ᵗⁱᵐᵉ ᵗᵒ ᵉˣᵖˡᵒʳᵉ ᵐʸ ᵖᵒʳᵗᶠoˡⁱᵒ. ʸᵒᵘʳ ᵃᵗᵗᵉⁿᵗⁱᵒⁿ ᵐᵉᵃⁿˢ ᵃ ˡᵒᵗ, ᵃⁿᵈ ᴵ ˡᵒᵒᵏ ᶠᵒʳʷᵃʳᵈ ᵗᵒ ᵃⁿʸ ⁱⁿˢⁱᵍʰᵗˢ ᵒʳ ᵒᵖᵖᵒʳᵗᵘⁿⁱᵗⁱᵉˢ ᵗʰᵃᵗ ᵐᵃʸ ᵃʳⁱˢᵉ ᶠʳᵒᵐ ʸᵒᵘʳ ʳᵉᵛⁱᵉʷ." <br /> - ᵣₐₘₑₛₕwₐᵣ ₙₐᵥₐₜₕₐᵣ
          </p>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Email Sent Successfully!</h2>
            <p>Thank you for contacting us. We will get back to you shortly.</p>
            <button className="close-popup-button" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Error message if email fails */}
      {emailError && (
        <div className="error-message">
          <p>{emailError}</p>
        </div>
      )}
    </>
  );
}

export default Contact;
