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
          variant='h3'
          align='center'>
          Top 5 Authors from Facebook
        </Typography>
        <Typography
          variant='h4'
          align='center'>
          Along with Their Most Viewed Article
        </Typography>
        <br/>
        <div className='Author-list'>
          { 
            isLoading ? 
              <Typography
                variant='h6'
                color='primary'
                align='center'>
                Loadingg
              </Typography> : 
              <AuthorList topArticles = {topArticles}/>
          }
        </div>
    </div>
  );
}

// Export Component
export default TechAssessment;