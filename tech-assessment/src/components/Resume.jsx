// Import Dependencies
import React from 'react';
import { Typography, Link } from '@mui/material';
import resume from '../Murphy-Fleenor-Resume.webp'

// Create Functional Component
const Resume = () => {

  // Return JSX
  return (
    <div>
      <img src={resume} className="Resume-pic" alt="Resume" />
      <Link
        className="Resume-link"
        href="https://drive.google.com/file/d/1fjm_U74prsK9PY9tqzcgadNvQIkRhEEE/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
        Downloadable PDF Here!
      </Link>
    </div>
  );
}

// Export Component
export default Resume;
