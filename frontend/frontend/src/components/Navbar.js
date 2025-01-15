import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/insc">Sign Up</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
