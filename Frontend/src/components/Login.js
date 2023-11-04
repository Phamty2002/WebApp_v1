import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await fetch('/api/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login here, e.g., redirect to a new page
        window.location.href = '/home'; // Redirect to the home page
      } else {
        // Handle authentication failure, show an error message
        const errorData = await response.json();
        setError(errorData.message);
        console.error('Authentication failed');
      }
    } catch (error) {
      // Handle network errors, request failures, etc.
      setError('An error occurred');
      console.error('An error occurred', error);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </div>
        <button type="submit">Sign In</button>
        <p className="signup-link">
          Don't have an account ? <a href="/sign-up">Sign-Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
