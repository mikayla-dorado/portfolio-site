// index.js or App.js (entry point)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApplicationViews } from './Components/Views/ApplicationViews';
import { NavBar } from './Components/Nav/NavBar';
import { Footer } from './Components/Footer/Footer';

ReactDOM.render(
  <Router>
    <NavBar />
    <ApplicationViews />
    <Footer />
  </Router>,
  document.getElementById('root')
);
