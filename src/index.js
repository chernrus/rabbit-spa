import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './assets/w3.css';
import './assets/index.css';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);
