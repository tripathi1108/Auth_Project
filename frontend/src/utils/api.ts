import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (username: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { username, email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const getProtectedData = async (token: string) => {
  const response = await axios.get('http://localhost:5000/api/protected', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};