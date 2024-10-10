import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './Images/img1.png';
import image2 from './Images/img2.png';
import image3 from './Images/img3.png';
import image4 from './Images/img4.png';
import image5 from './Images/img5.png';
import image6 from './Images/img6.png';
import image7 from './Images/img7.png';
import image8 from './Images/img8.png';
import image9 from './Images/img9.png';
import image10 from './Images/img10.png';
import image11 from './Images/img11.png';
import image12 from './Images/img12.png';
import image13 from './Images/img13.png';
import image14 from './Images/img14.png';
import image15 from './Images/img15.png';
import image16 from './Images/img16.png';
import image17 from './Images/img17.png';
import image18 from './Images/img18.png'; // Changed folder name from img to Images

// Images array for easy access
const images = [image10, image15, image16, image14, image5, image6, image7, image8, image9, image1, image11, image12, image13, image4, image2, image3, image17, image18];

function Images() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Previous Button */}
        <button className="carousel-control prev" onClick={prevImage}>
          &#10094; {/* Left arrow */}
        </button>

        <img src={images[currentIndex]} alt={`Bootcamp Image ${currentIndex + 1}`} className="carousel-image" />

        {/* Next Button */}
        <button className="carousel-control next" onClick={nextImage}>
          &#10095; {/* Right arrow */}
        </button>
      </div>

      <h1 className="text-center">Capturing Key Moments from My Bootcamp Journey</h1>

      {/* Back Button */}
      <div className="images-button-section">
        <Link to="/experience" className="images-button22">Back to Experience</Link>
      </div>
    </div>
  );
}

export default Images;
