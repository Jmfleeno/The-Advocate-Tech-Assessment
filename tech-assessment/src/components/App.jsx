// Import Dependencies
import logo from '../nola-logo.png';
import '../styles/App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AuthorList from './AuthorList.jsx';

// Create Functional Component
const App = () => {
  // Create State Object
  const [top10Articles, setTop10Articles] = useState(null)
  const [isLoading, setLoading] = useState(true);

  // Set State object
  useEffect(() => {
    axios
      .get('https://api.parsely.com/v2/top/posts?apikey=blog.parsely.com')
      .then((response) => {setTop10Articles(response.data.data)})
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
  }, []);
  // Returned JSX
  return (
    <div className="App">
      <section className="hero is-warning">
        <div className="hero-body">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </section>
      <header className="App-header">
        <p>
          
        </p>
        <div>
          { isLoading ? 
            <div>Is Loading</div> : 
            <AuthorList top10Articles = {top10Articles}/>
          }
        </div>
        <a
          className="App-link"
          href="https://www.nola.com"
          target="_blank"
          rel="noopener noreferrer">
          Go to Nola.com
        </a>
      </header>
    </div>
  );
}

// Export Component
export default App;
