import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../utils/api';

const Protected: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        return;
      }

      try {
        const response = await getProtectedData(token);
        setData(response.message);
      } catch (error) {
        setError('Failed to fetch protected data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="protected">
      <h2>Protected Route</h2>
      {error && <p className="error">{error}</p>}
      {data && <p>{data}</p>}
    </div>
  );
};

export default Protected;