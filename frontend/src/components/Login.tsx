import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/api';
import { AxiosError } from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setMessage({ text: 'All fields are required', type: 'error' });
      return;
    }

    try {
      const { token } = await login(email, password);
      localStorage.setItem('token', token);
      setMessage({ text: 'Login successful! Redirecting...', type: 'success' });
      setTimeout(() => navigate('/'), 2000); // Redirect to Home Page
    } catch (error) {
      let errorMessage = 'Login failed. Please check your credentials.';
      if (error instanceof AxiosError && error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      console.error('Login failed:', errorMessage);
      setMessage({ text: errorMessage, type: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {message && (
        <p className={`message ${message.type}`}>
          {message.text}
        </p>
      )}
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;