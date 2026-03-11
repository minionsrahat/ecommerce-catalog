/**
 * CONTEXT: AuthContext
 *
 * Global authentication state management.
 * Handles user login, signup, logout, and authentication status.
 *
 * Features:
 * - Stores user data in localStorage for persistence
 * - Provides authentication methods to all components
 * - Manages loading and error states
 *
 * Usage:
 * 1. Wrap your app with <AuthProvider>
 * 2. Use useAuth() hook in any component to access auth state and methods
 */

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Error loading user from localStorage:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data (replace with actual API response)
      const userData = {
        id: Date.now(),
        name: credentials.email.split('@')[0],
        email: credentials.email,
        avatar: `https://ui-avatars.com/api/?name=${credentials.email.split('@')[0]}&background=random`,
      };

      // Save to state and localStorage
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      // Save remember me preference
      if (credentials.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      return { success: true, user: userData };
    } catch (err) {
      const errorMessage = err.message || 'Login failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function
  const signup = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data (replace with actual API response)
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        avatar: `https://ui-avatars.com/api/?name=${userData.name}&background=random`,
      };

      // Save to state and localStorage
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));

      return { success: true, user: newUser };
    } catch (err) {
      const errorMessage = err.message || 'Signup failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    setError(null);
  };

  // Social login function
  const socialLogin = async (provider) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call (replace with actual OAuth flow)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock user data (replace with actual API response)
      const userData = {
        id: Date.now(),
        name: `${provider} User`,
        email: `user@${provider}.com`,
        avatar: `https://ui-avatars.com/api/?name=${provider}+User&background=random`,
        provider: provider,
      };

      // Save to state and localStorage
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      return { success: true, user: userData };
    } catch (err) {
      const errorMessage = err.message || `${provider} login failed. Please try again.`;
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (updates) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      return { success: true, user: updatedUser };
    } catch (err) {
      const errorMessage = err.message || 'Failed to update profile.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    signup,
    logout,
    socialLogin,
    updateProfile,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
