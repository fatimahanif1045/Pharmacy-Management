// pages/Login.js
import React, { useState } from 'react';
import '../style/style.css'; // Your original CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigate on success, show error on failure
  };

  return (
    <div style={{ height: '100vh', margin: '40px' }}>
      <form onSubmit={handleSubmit} autoComplete="on">
        <legend className="login" style={{ textAlign: 'center' }}>Log in</legend>
        <br />
        <div className="img">
          <img src="/favicon.png" alt="favicon" className="favicon" />

        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <div className="forgot">Forget Password?</div>

        <input className="button" type="submit" value="Login" />

        <label style={{ marginLeft: '10px' }}>
          <input type="checkbox" name="remember" defaultChecked /> Remember me
        </label>
      </form>
    </div>
  );
}

export default Login;
