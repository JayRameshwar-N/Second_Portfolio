import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [ 
  {
    src: 'https://user-images.githubusercontent.com/35935634/174480940-2e787f38-bcc5-4922-b6cc-8298f374bdb6.gif', // Image URL
    title: 'Project 1: Password_Generator',
    description: 'A secure, customizable password generator built with React.js that offers strong, unique passwords.',
    repoLink: 'https://rn74passgenrete.netlify.app/', // GitHub Repo Link
  },
  {
    src: 'https://res.cloudinary.com/didyouknowthat/image/upload/v1614240443/new_lms/sc3.jpg',
    title: 'Project 2: Book_Management',
    description: 'The Book Management Project is a system for managing book storage and other features.',
    repoLink: 'https://github.com/JayRameshwar-N/BookManagement-.git',
  },
  {
    src: 'https://www.fs-poster.com/storage/photos/2/Features/url%20shortener.gif',
    title: 'Project 3: URL_shortener',
    description: 'URL shortener is an online service that transforms lengthy URLs into concise, easily shareable links.',
    repoLink: 'https://github.com/JayRameshwar-N/URL_shortner.git',
  },
  {
    src: 'https://j.gifs.com/jqQVYv@large.gif?download=true',
    title: 'Project 4: Blogging_Site',
    description: 'Blogging Site Mini Project is a web application for creating, publishing, and managing blog posts.',
    repoLink: 'https://github.com/JayRameshwar-N/Blogging-SiteMiniProject.git',
  },
  {
    src: 'https://qep.co.id/wp-content/uploads/2021/12/trd.jpg',
    title: 'Project 5: internInsite',
    description: 'The internInsite project was built using React.js, Node.js, Express.js, and MongoDB.',
    repoLink: 'https://github.com/JayRameshwar-N/Internship-InternInsite.git',
  },
];

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State to track image loading

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsLoading(true); // Reset loading state for next image
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setIsLoading(true); // Reset loading state for previous image
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Hide loading animation once the image is fully loaded
  };

  return (
    <div className="project-carousel-containerz">
      <div className="project-carouselz">
        {/* Previous Button */}
        <button className="project-carousel-controlz project-prevz" onClick={prevImage}>
          &#10094; {/* Left arrow */}
        </button>

        {/* Loading Spinner */}
        {isLoading && <div className="loading-spinner">Loading...</div>}

        {/* Image and Info */}
        <img
          src={projects[currentIndex].src}
          alt={projects[currentIndex].title}
          className={`project-carousel-imagez ${isLoading ? 'hidden' : ''}`} // Hide image while loading
          onLoad={handleImageLoad} // Triggered when image loads completely
          onClick={() => window.open(projects[currentIndex].repoLink, '_blank')}
        />

        <div className="project-infoz">
          <h2 className="project-titlez">{projects[currentIndex].title}</h2>
          <p className="project-descriptionz">{projects[currentIndex].description}</p>
        </div>

        {/* Next Button */}
        <button className="project-carousel-controlz project-nextz" onClick={nextImage}>
          &#10095; {/* Right arrow */}
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="project-navigationz">
        <Link to="/experience" className="project-nav-buttonz1">Back to Experience</Link>
        <Link to="/skills" className="project-nav-buttonz2">Next to Skills</Link>
      </div>
    </div>
  );
}

export default Project;
