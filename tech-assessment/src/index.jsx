import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const id = document.getElementById('root');
const root = ReactDOM.createRoot(id);
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
