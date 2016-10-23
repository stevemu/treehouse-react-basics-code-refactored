import React from 'react';
import { Router, Route, bashHistory } from 'react-router';

// Components
import App from './App';
import Home from './components/Home';
import Courses from './components/Courses';
import Featured from './components/Featured';
import Teachers from './components/Teachers';
import About from './components/About';

const route = (
  <Router history={bashHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/featured" component={Featured} />
      <Route path="/teachers" component={Teachers} />
    </Route>
  </Router>
);

export default route;
