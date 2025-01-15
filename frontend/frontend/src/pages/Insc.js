import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Insc.css';

const Insc = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); // Create the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // First Name Validation
    if (!firstName || firstName.length < 2) {
      formErrors.firstName = "First name must be at least 2 characters.";
    }

    // Last Name Validation
    if (!lastName || lastName.length < 2) {
      formErrors.lastName = "Last name must be at least 2 characters.";
    }

    // Email Validation
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }

    // Password Validation
    if (!password || password.length < 8) {
      formErrors.password = "Password must be at least 8 characters.";
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(formErrors).length === 0) {
      // If no errors, proceed with registration logic
      console.log('Registering with', { firstName, lastName, email, password });
      
      // After successful registration, navigate to the login page
      navigate('/Insc');  // Navigate to the login page after successful registration
    } else {
      // Set the errors to display on the form
      setErrors(formErrors);
    }
  };

  return (
    <div className="insc-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        {/* Last Name */}
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        {/* Confirm Password */}
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Insc;
