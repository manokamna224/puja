'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on app load
    const token = localStorage.getItem('userToken');
    const userPhone = localStorage.getItem('userPhone');
    
    if (token && userPhone) {
      setUser({
        phoneNumber: userPhone,
        token: token
      });
    }
    
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userToken', userData.token);
    localStorage.setItem('userPhone', userData.user.phoneNumber);
  };

  const logout = async () => {
    try {
      // Call logout API
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local state regardless of API call success
      setUser(null);
      localStorage.removeItem('userToken');
      localStorage.removeItem('userPhone');
      router.push('/login');
    }
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 