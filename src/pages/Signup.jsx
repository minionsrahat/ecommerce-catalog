/**
 * PAGE: Signup
 *
 * Signup/registration page that displays the signup form.
 * Uses SignupForm organism and AuthContext for user registration.
 *
 * Features:
 * - Name, email, password registration
 * - Social signup (Google, Facebook)
 * - Password strength validation
 * - Terms and conditions acceptance
 * - Redirect to home after successful signup
 * - Link to login page
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SignupForm } from '../components/organisms';
import { Card } from '../components/atoms';

const Signup = () => {
  const navigate = useNavigate();
  const { signup, socialLogin, isAuthenticated, isLoading } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = async (userData) => {
    const result = await signup(userData);

    if (result.success) {
      // Redirect to home page after successful signup
      navigate('/');
    } else {
      // Error handling is done in AuthContext
      console.error('Signup failed:', result.error);
    }
  };

  const handleSocialSignup = async (provider) => {
    const result = await socialLogin(provider);

    if (result.success) {
      // Redirect to home page after successful signup
      navigate('/');
    } else {
      console.error(`${provider} signup failed:`, result.error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join us today and start shopping amazing products
          </p>
        </div>

        {/* Signup Form Card */}
        <Card className="p-8">
          <SignupForm
            onSubmit={handleSignup}
            onSocialSignup={handleSocialSignup}
            isLoading={isLoading}
          />
        </Card>

        {/* Additional Info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By creating an account, you agree to our{' '}
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

export default Signup;
