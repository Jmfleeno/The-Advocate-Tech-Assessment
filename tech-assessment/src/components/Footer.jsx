// Import Dependencies
import React from 'react';
import { Typography, Link } from '@mui/material';

// Create Functional Component
const Footer = () => {

  // Return JSX
  return (
    <div>
      <Typography
        variant='text'
        align='center'>
        Thanks for stopping by!<br/> Check out the code for this project below.
      </Typography><br/>

      <Link
          className="App-footer-link"
          href="https://github.com/Jmfleeno/The-Advocate-Tech-Assessment"
          target="_blank"
          rel="noopener noreferrer">
          GitHub Repository Link
        </Link>
    </div>
  );
}

// Export Component
export default Footer;