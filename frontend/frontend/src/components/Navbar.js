import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/login"><b>Login</b></Link></li>
        <li><Link to="/insc"><b>Sign Up</b></Link></li>
        <li><Link to="/books"><b>Books</b></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
