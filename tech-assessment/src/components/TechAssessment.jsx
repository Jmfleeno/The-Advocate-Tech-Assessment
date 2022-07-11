// Import Dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Typography} from '@mui/material'
import AuthorList from './AuthorList.jsx';

// Create Functional Component
const TechAssessment = () => {
  // Create State Objects
  const [topArticles, setTopArticles] = useState(null)
  const [isLoading, setLoading] = useState(true);

  // Set State Objects
  useEffect(() => {
    axios
      .get('https://api.parsely.com/v2/top/posts?apikey=blog.parsely.com')
      .then((response) => {setTopArticles(response.data.data)})
      .then(() => setLoading(false))
      .catch((err) => console.error(err))
  }, []);

  // Return JSX
  return (
    <div className="App">
        <Typography
          variant='h2'
          color='primary'
          align='center'>
          Current Top 5 Facbook Authors
        </Typography>
        <Typography
          variant='h4'
          color='primary'
          align='center'>
          Along with Their Most Viewed Article
        </Typography>
        <br/>
        <div className='Author-list'>
          { 
            isLoading ? 
              <Typography
                variant='h2'
                color='primary'
                align='center'>
                Welcome to Tech Assessment
              </Typography> : 
              <AuthorList topArticles = {topArticles}/>
          }
        </div>
    </div>
  );
}

// Export Component
export default TechAssessment;