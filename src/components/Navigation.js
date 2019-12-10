import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/components/Home.js">Home</Link>
        </div>
        <div>
          <Link to="/components/About.js">About</Link>
        </div>
        <div>
          <Link to="/components/Contact.js">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
