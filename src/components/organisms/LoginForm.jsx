/**
 * ORGANISM: LoginForm Component
 *
 * Complete login form with email/password inputs, social login options,
 * remember me checkbox, and forgot password link.
 *
 * Combines:
 * - Input (atom) for email
 * - PasswordInput (molecule) for password
 * - Checkbox (atom) for remember me
 * - Button (atom) for submit
 * - Link (atom) for forgot password
 * - SocialLoginButton (molecule) for social auth
 * - Divider (molecule) for visual separation
 *
 * Props:
 * - onSubmit: Function called with { email, password, rememberMe }
 * - onSocialLogin: Function called with provider name
 * - isLoading: Boolean for submit button loading state
 */

import { useState } from 'react';
import { Input } from '../atoms';
import { PasswordInput, SocialLoginButton, Divider } from '../molecules';
import { Button, Checkbox, Link } from '../atoms';

const LoginForm = ({
  onSubmit,
  onSocialLogin,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value = field === 'rememberMe' ? e.target.checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleSocialLogin = (provider) => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Social Login Buttons */}
      <div className="space-y-3">
        <SocialLoginButton
          provider="google"
          onClick={() => handleSocialLogin('google')}
        />
        <SocialLoginButton
          provider="facebook"
          onClick={() => handleSocialLogin('facebook')}
        />
      </div>

      {/* Divider */}
      <Divider text="OR" />

      {/* Email Input */}
      <Input
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
        placeholder="you@example.com"
        error={errors.email}
        autoComplete="email"
      />

      {/* Password Input */}
      <PasswordInput
        label="Password"
        value={formData.password}
        onChange={handleChange('password')}
        placeholder="Enter your password"
        error={errors.password}
        autoComplete="current-password"
      />

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <Checkbox
          id="rememberMe"
          label="Remember me"
          checked={formData.rememberMe}
          onChange={handleChange('rememberMe')}
        />
        <Link to="/forgot-password" variant="primary" className="text-sm">
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Button>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" variant="primary">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
