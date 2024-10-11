import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Resume = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page (assuming it's '/')
  };

  return (
    <div className='resume-con'>
      <h2 className='resume'>𝘳𝘦𝘴𝘶𝘮𝘦 ⊹</h2>
      
      <a 
        href="https://drive.google.com/file/d/1NM53lpu_dX8K1tmWTGPsAi80VhUOG74p/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className='link'
      >
        Click here to view my resume
      </a>
      
      <button 
        onClick={handleBackClick} 
        className='back-button11'
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Resume;
