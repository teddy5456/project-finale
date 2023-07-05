import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file for styling

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userData = { name, email, password };
      console.log('User data:', userData); // Log the user data being posted

      const response = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Signup successful, redirect to Home or perform any desired action
        navigate('/home');
      } else {
        // Handle signup error
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleLogin = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="login-form-container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <button onClick={handleLogin}>Log In</button>
      </p>
    </div>
  );
};

export default SignupForm;
