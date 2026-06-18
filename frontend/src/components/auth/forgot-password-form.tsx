'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import toast from 'react-hot-toast';

export function ForgotPasswordForm() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Valid email is required');
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email);
      setSubmitted(true);
      toast.success('Password reset email sent! Check your inbox.');
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
      toast.error(error || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 text-center">
          <div className="mb-4 text-4xl">✉️</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Check Your Email
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've sent a password reset link to <strong>{email}</strong>.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Click the link in the email to reset your password. If you don't see it, check
            your spam folder.
          </p>
          <Link
            href="/auth/login"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Reset Password
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {/* Back to Login */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Remember your password?{' '}
          <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
