import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  // Handlers for navigation
  const handleNextPage = () => {
    navigate('/experience'); // Experience page
  };

  const handleBackPage = () => {
    navigate('/portfolio'); // Portfolio page
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">𝓐𝙗𝙤𝙪𝙩 <span className='me'>𝓜𝓮</span></h2>
        <h3 className="about-subtitle"><span className='backend'>𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞   </span>   𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫</h3>
        
        <p className="about-description">
          Hello, I’m Rameshwar, a 2020 B.Com. graduate in Banking and Finance from Savitribai Phule Pune University. 
        </p>
        <p className="about-description">
          After graduation, I dedicated 2 years to preparing for the Civil Services Examination, which significantly enhanced my analytical and problem-solving skills. However, due to some issues, I decided to pivot my career focus and enter the technology field.
        </p>
        <p className="about-description">
          I completed a 6-month software development bootcamp at Function Up, followed by a 4-month unpaid internship, where I further honed my technical skills.
        </p>
        <p className="about-description">
          I specialize in <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, <strong>AWS S3</strong>, <strong>Redis</strong>, <strong>Git</strong>, <strong>GitHub</strong>, <strong>XML</strong>, <strong>Bootstrap</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>. With these skills, I have built several practical and real-time workable projects.
        </p>
        <p className="about-description">
          Thank you for considering my profile. I look forward to discussing how I can add value to your team.
        </p>

        {/* Back and Next Page Buttons */}
        <div className="button-container">
          <button className="back-button" onClick={handleBackPage}>
            𝐁𝐚𝐜𝐤 
          </button>
          <button className="next-button" onClick={handleNextPage}>
            𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
