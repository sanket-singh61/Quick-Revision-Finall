import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  if (isForgotPassword) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Reset Password</h2>
          <p className="login-subtitle">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form className="login-form" onSubmit={(e) => { e.preventDefault(); alert("Password reset link has been sent to your email!"); setIsForgotPassword(false); setIsLogin(true); }}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>

            <button type="submit" className="login-submit-btn">
              Send Reset Link
            </button>
          </form>

          <div className="login-footer">
            <p>
              Remember your password?
              <span onClick={() => setIsForgotPassword(false)} className="toggle-auth">
                {' Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="login-subtitle">
          {isLogin ? 'Login to access your saved notes and materials.' : 'Sign up to kickstart your quick revision journey.'}
        </p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Sanket Singh Baghel" required />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          {isLogin && (
            <span 
              className="forgot-password" 
              onClick={() => setIsForgotPassword(true)}
              style={{cursor: 'pointer'}}
            >
              Forgot Password?
            </span>
          )}

          <button type="submit" className="login-submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
              {isLogin ? ' Sign up' : ' Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
