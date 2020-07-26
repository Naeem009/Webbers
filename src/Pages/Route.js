import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contacts from './Contacts';
import NavBar from './NavBar.js';
import Footer from './Footer';

function RouteConfig() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route path="/contacts" component={Contacts} />
            <Route path="*" component={()=><h2>This page is not the part of this website</h2>} />
        </Switch>
        <Footer />
      </Router>
     
    </div>
  );
}

export default RouteConfig;
