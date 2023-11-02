import React from 'react';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-group">
          <a href="#" className="forgot-password-link">Forgot Password?</a>
        </div>
        <button type="submit">Log in</button>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
