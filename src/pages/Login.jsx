/**
 * PAGE: Login
 *
 * Login page that displays the login form.
 * Uses LoginForm organism and AuthContext for authentication.
 *
 * Features:
 * - Email/password login
 * - Social login (Google, Facebook)
 * - Remember me functionality
 * - Redirect to home after successful login
 * - Link to signup page
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoginForm } from '../components/organisms';
import { Card } from '../components/atoms';

const Login = () => {
  const navigate = useNavigate();
  const { login, socialLogin, isAuthenticated, isLoading } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (credentials) => {
    const result = await login(credentials);

    if (result.success) {
      // Redirect to home page after successful login
      navigate('/');
    } else {
      // Error handling is done in AuthContext
      console.error('Login failed:', result.error);
    }
  };

  const handleSocialLogin = async (provider) => {
    const result = await socialLogin(provider);

    if (result.success) {
      // Redirect to home page after successful login
      navigate('/');
    } else {
      console.error(`${provider} login failed:`, result.error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to your account to continue shopping
          </p>
        </div>

        {/* Login Form Card */}
        <Card className="p-8">
          <LoginForm
            onSubmit={handleLogin}
            onSocialLogin={handleSocialLogin}
            isLoading={isLoading}
          />
        </Card>

        {/* Additional Info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By signing in, you agree to our{' '}
          <a href="/terms" className="text-primary-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
