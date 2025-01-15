import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Insc from './pages/Insc';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';

const AppRoutes = () => {
  const location = useLocation();

  // Conditionally render the Navbar based on the current route
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/insc';

  return (
    <div className="App">
      <Navbar /> {/* Render Navbar only if not on /login or /insc */}
      <Header />  {/* Header is always visible */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/insc" element={<Insc />} />
        <Route path="/books" element={<Books />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
