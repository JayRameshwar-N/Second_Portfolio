import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Experience() {
  return (
    <div className="experience-container">
      {/* Navigation buttons placed at the top */}
      <div className="experience-buttons">
        <Link to="/About" className="nav-button back-button">Back</Link>
        <Link to="/Project" className="next-buttonN">𝙿𝚛𝚘𝚓𝚎𝚌𝚝</Link>
      </div>

      <h2 className="experience-title">ᴡʜᴀᴛ ɪ ʜᴀᴠᴇ ᴅᴏɴᴇ ꜱᴏ ꜰᴀʀ</h2>
      
      <div className="experience-section">
        <h3 className="experience-subtitle">Work Experience</h3>
        <h4 className="experience-role">Backend Developer Trainee and Intern</h4>
        <ul className="experience-list">
          <li>Joined Function Up as a Backend Developer Trainee in September 2022.</li>
          <li>Received comprehensive training in Backend Development utilizing Node.js, Express.js, and MongoDB.</li>
          <li>Developed proficiency in building RESTful APIs and handling data storage and retrieval operations.</li>
          <li>Applied AWS S3 for secure and scalable file storage and retrieval.</li>
          <li>Utilized Redis for efficient caching, improving application performance.</li>
          <li>Utilized strong problem-solving skills to troubleshoot and resolve backend development challenges.</li>
          <li>Implemented JSON Web Tokens (JWT) for secure authentication and authorization.</li>
          <li>Collaborated effectively with team members using Git for version control and code collaboration.</li>
          <li>Developed backend projects by utilizing backend technology.</li>
        </ul>
      </div>

      <div className="experience-section">
        <h3 className="experience-subtitle">Professional Experience</h3>
        <h4 className="experience-role">Software Developer</h4>
        <ul className="experience-list">
          <li>Focused extensively on Node.js, building robust and scalable web applications.</li>
          <li>Proficient in a variety of technologies: Expertise in MongoDB, Express.js, JavaScript, and React.js. Additionally skilled in Redis, Git, GitHub, XML, Bootstrap, and Tailwind CSS.</li>
          <li>Developed innovative solutions: Created efficient, user-friendly solutions to tackle real-world challenges, ensuring the use of cutting-edge technologies.</li>
          <li>Continuous learner: Committed to staying updated on the latest technological advancements to provide the most effective and modern solutions.</li>
          <li>Collaborative approach: Emphasizes teamwork and problem-solving to seamlessly integrate technology and bring ideas to life.</li>
        </ul>
      </div>

      <div className="experience-section">
        <h3 className="experience-subtitle">Additional Skills and Training</h3>
        <ul className="experience-list">
          <li>In addition to coding courses, I have completed training in essential computer skills, including typing and office software proficiency.</li>
          <li>These courses have enhanced my overall efficiency in digital environments, enabling me to work more productively and with greater precision.</li>
        </ul>
      </div>

      <p className="experience-summary">
        Experienced software developer with specialization in Node.js and a comprehensive tech stack.
      </p>

      {/* Bootcamp Images Section */}
      <div className="image-section">
        <p className="image-description">
          Below are some images from my bootcamp, showcasing my journey and accomplishments during the training period. These images serve as proof of my active participation and growth throughout the bootcamp.
        </p>

        {/* Button to navigate to the Images page */}
        <div className="images-button-section">
          <Link to="/Images" className="images-button">Images</Link>
        </div>
      </div>

    </div>
  );
}

export default Experience;
