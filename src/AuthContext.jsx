import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://app.lssenergysolar.cl/api/login', {
        email,
        password
      });
      const token = response.data.token;
      setToken(token);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };
console.log(children)
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
        
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
