// Import Dependencies
import '../styles/App.css';
import React from 'react';
import Author from './Author.jsx'

// Create Functional Component
const AuthorList = ({topArticles}) => {
  // Return JSX
  return (
    <div>
      {/* Loop Over the First 5 Articles/Authors */}
      {topArticles.slice(0, 5).map((article) => {
        return (
          <div>
            <Author
              author={article.author}
              article={article.title}
              articleUrl={article.url}
              imageUrl={article.thumb_url_medium}
              key={article.pub_date+article.title}
            /><br/>
          </div>
        );
      })}
    </div>
  );
}

//Export Component
export default AuthorList;