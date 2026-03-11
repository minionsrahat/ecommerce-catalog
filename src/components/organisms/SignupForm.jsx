/**
 * ORGANISM: SignupForm Component
 *
 * Complete signup form with name, email, password, confirm password,
 * terms acceptance, and social signup options.
 *
 * Combines:
 * - Input (atom) for name and email
 * - PasswordInput (molecule) for password and confirm password
 * - Checkbox (atom) for terms acceptance
 * - Button (atom) for submit
 * - Link (atom) for navigation to login
 * - SocialLoginButton (molecule) for social auth
 * - Divider (molecule) for visual separation
 *
 * Props:
 * - onSubmit: Function called with { name, email, password, acceptTerms }
 * - onSocialSignup: Function called with provider name
 * - isLoading: Boolean for submit button loading state
 */

import { useState } from 'react';
import { Input } from '../atoms';
import { PasswordInput, SocialLoginButton, Divider } from '../molecules';
import { Button, Checkbox, Link } from '../atoms';

const SignupForm = ({
  onSubmit,
  onSocialSignup,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value = field === 'acceptTerms' ? e.target.checked : e.target.value;
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms acceptance validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const { confirmPassword, ...submitData } = formData;
      onSubmit(submitData);
    }
  };

  const handleSocialSignup = (provider) => {
    if (onSocialSignup) {
      onSocialSignup(provider);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Social Signup Buttons */}
      <div className="space-y-3">
        <SocialLoginButton
          provider="google"
          onClick={() => handleSocialSignup('google')}
        />
        <SocialLoginButton
          provider="facebook"
          onClick={() => handleSocialSignup('facebook')}
        />
      </div>

      {/* Divider */}
      <Divider text="OR" />

      {/* Name Input */}
      <Input
        label="Full Name"
        type="text"
        value={formData.name}
        onChange={handleChange('name')}
        placeholder="John Doe"
        error={errors.name}
        autoComplete="name"
      />

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
        placeholder="Create a strong password"
        error={errors.password}
        autoComplete="new-password"
      />

      {/* Confirm Password Input */}
      <PasswordInput
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
        placeholder="Confirm your password"
        error={errors.confirmPassword}
        autoComplete="new-password"
      />

      {/* Terms & Conditions */}
      <div>
        <Checkbox
          id="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange('acceptTerms')}
          label={
            <span>
              I accept the{' '}
              <Link to="/terms" variant="primary" className="text-sm">
                Terms and Conditions
              </Link>
            </span>
          }
        />
        {errors.acceptTerms && (
          <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Create Account'}
      </Button>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" variant="primary">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
