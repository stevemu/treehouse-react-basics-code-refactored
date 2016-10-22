// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// CSS
import '../../app/css/style.css';

// Components
import App from '../../app/App';
import Home from '../../app/components/Home';

// Render
render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
),document.getElementById('root'));
