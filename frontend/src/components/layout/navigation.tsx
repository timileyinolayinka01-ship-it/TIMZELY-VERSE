'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Timzely Logo AI
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Features</Link>
            <Link href="/#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Pricing</Link>
            <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Login</Link>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
