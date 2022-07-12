// Import Dependencies
import React from 'react';
import { Typography, Link } from '@mui/material';

// Create Functional Component
const Author = ({author, article, articleUrl, imageUrl}) => {
  // Return JSX
  return (
    <div>
      <Typography
        variant='h5'
        align='center'>
        {author}
      </Typography>
      <Link
        className="App-link"
        href={articleUrl}
        target="_blank"
        rel="noopener noreferrer">
        <Typography
          variant='h6'
          align='center'
          color='primary'>
          {article}
        </Typography>
      </Link><br/>
      <img src={imageUrl} className="Article-pic" alt="Article" />

    </div>
  );
}

//Export Component
export default Author;
