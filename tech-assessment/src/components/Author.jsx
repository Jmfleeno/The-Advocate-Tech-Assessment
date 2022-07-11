// Import Dependencies
import '../styles/App.css';
import React from 'react';

// Create Functional Component
const Author = ({author, article, articleUrl}) => {
  
  console.log(author)
  // Return JSX
  return (
    <div>
      <li>{author}</li>
      <a
          className="App-link"
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer">
          <div>{article}</div>
      </a>
    </div>
  );
}

//Export Component
export default Author;
