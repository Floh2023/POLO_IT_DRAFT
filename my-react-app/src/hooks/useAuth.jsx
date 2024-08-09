import { useState, useEffect } from 'react';
import { login } from '../services/authService';

const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const authToken = await login(email, password);
      setToken(authToken);
      localStorage.setItem('authToken', authToken);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('authToken');
  };

  return {
    token,
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
