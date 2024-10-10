import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Experience from './Expireince.jsx';
import Portfolio from './Portfolio.jsx';
import Welcome from './Wellcome.jsx'; 
import Resume from './Resume.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Images from './Images.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import LoadingAnimation from './LoadingAnimation.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/images" element={<Images />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}

export default App;
