import React, { useState } from 'react';
import './login.css';
import {useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home')
  };

  return (
    <div className="login-container">
      <h1 className="main-heading">Welcome</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleChange}
          required 
        />

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange}
          required 
        />

        <button type="submit" className="quiz-btn">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <a href="#">Sign up today</a></p>
      </div>
    </div>
    
  );
};

export default LoginPage;
