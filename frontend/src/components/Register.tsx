import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/api';
import { AxiosError } from 'axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setMessage({ text: 'All fields are required', type: 'error' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage({ text: 'Invalid email format', type: 'error' });
      return;
    }

    try {
      const { token } = await register(username, email, password);
      localStorage.setItem('token', token);
      setMessage({ text: 'Registration successful! Redirecting...', type: 'success' });
      setTimeout(() => navigate('/'), 2000); // Redirect to Home Page
    } catch (error) {
      let errorMessage = 'Registration failed. Please try again.';
      if (error instanceof AxiosError && error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      console.error('Registration failed:', errorMessage);
      setMessage({ text: errorMessage, type: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {message && (
        <p className={`message ${message.type}`}>
          {message.text}
        </p>
      )}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;