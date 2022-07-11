// Import Dependencies
import '../styles/App.css';
import React from 'react';
import Author from './Author.jsx'

// Create Functional Component
const AuthorList = ({top10Articles}) => {
  // Return JSX
  return (
    <div>
      {/* Loop over the first 5 elements articles */}
      {top10Articles.slice(0, 5).map((article) => {
        return (
            <Author
              author={article.author}
              article={article.title}
              articleUrl={article.url}
              key={article.author+article.title+article.pub_date}
            />
        );
      })}
    </div>
  );
}

//Export Component
export default AuthorList;