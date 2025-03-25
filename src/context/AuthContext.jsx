import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../config/googleConfig';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error('Lỗi khi đọc dữ liệu người dùng:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    try {
      if (!credentialResponse?.credential) {
        throw new Error('Không nhận được thông tin đăng nhập từ Google');
      }

      const decoded = jwtDecode(credentialResponse.credential);
      
      if (!decoded?.sub || !decoded?.name || !decoded?.email) {
        throw new Error('Token không chứa đủ thông tin người dùng');
      }

      const userData = {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture || null
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setError(null);
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      setError('Đăng nhập không thành công. Vui lòng thử lại.');
      setUser(null);
      localStorage.removeItem('user');
    }
  };

  const handleLoginError = () => {
    console.error('Đăng nhập thất bại');
    setError('Đăng nhập không thành công. Vui lòng thử lại.');
    setUser(null);
    localStorage.removeItem('user');
  };

  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    error,
    login: handleLoginSuccess,
    logout
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}; 