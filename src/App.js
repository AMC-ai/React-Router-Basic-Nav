import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/components/Home.js" component={Home} />
    <Route exact path="/components/About.js" component={About} />
    <Route exact path="/components/Contact.js" component={Contact} />
  </div>
);

export default App;
