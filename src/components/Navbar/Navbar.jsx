// Navbar.js

import React from 'react';
import './navbar.css'; // Import the stylesheet

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item active">Home</div>
      <div className="nav-item">Purchase Orders</div>
      <div className="nav-item">About</div>
    </div>
  );
};

export default Navbar;
