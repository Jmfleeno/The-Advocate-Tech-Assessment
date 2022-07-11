// Import Dependencies
import '../styles/App.css';
import React from 'react';
import { Typography, Link } from '@mui/material';

// Create Functional Component
const Author = ({author, article, articleUrl}) => {
  // Return JSX
  return (
    <div>
       <Typography
          variant='h6'
          color='primary'
          align='center'>
          {author}
        </Typography>
      <Link
          className="App-link"
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer">
          <Typography>
            {article}
          </Typography>
      </Link>
    </div>
  );
}

//Export Component
export default Author;
