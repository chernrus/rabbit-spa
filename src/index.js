import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import ApiService from './modules/ApiService';
import './assets/w3.css';
import './assets/index.css';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);
