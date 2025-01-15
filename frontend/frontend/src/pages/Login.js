import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    
    // Email validation
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required.";
    }

    if (Object.keys(formErrors).length === 0) {
      // Proceed with login (add your login logic here)
      console.log('Logging in with', { email, password });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        
        <button type="submit" >Login</button>
      </form>
      
      {/* Link to Registration Page */}
      <p>
        Don't have an account? <Link to="/Insc">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
