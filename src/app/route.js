import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';

// Components
import App from './App';
import Home from './components/Home';
import Courses from './components/Courses';
import Featured from './components/Featured';
import Teachers from './components/Teachers';
import About from './components/About';

// Courses components
// import CSS from './components/courses/CSS';
// import HTML from './components/courses/HTML';
import CourseContainer from './components/courses/CourseContainer';

import NotFound from './components/NotFound';
import CourseList from './data/courses';

const route = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} >
        <IndexRedirect to="/courses/html" />
        <Route path="/courses/css" component={CourseContainer} data={CourseList.CSS}/>
        <Route path="/courses/html" component={CourseContainer} data={CourseList.HTML} />
        <Route path="/courses/javascript" component={CourseContainer} data={CourseList.JS}/>
      </Route>
      <Route path="/featured" component={Featured} />
      <Route path="/teachers" component={Teachers} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);


//  <IndexRoute component={CSS} />

export default route;
