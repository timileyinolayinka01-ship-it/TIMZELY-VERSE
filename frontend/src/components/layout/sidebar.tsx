'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'Generate Logo', href: '/generate', icon: '✨' },
  { label: 'My Logos', href: '/logos', icon: '🖼️' },
  { label: 'Favorites', href: '/favorites', icon: '❤️' },
  { label: 'Downloads', href: '/downloads', icon: '📥' },
  { label: 'Credits', href: '/credits', icon: '💳' },
  { label: 'Settings', href: '/settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">Timzely</h1>
      </div>
      <nav className="space-y-2 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              pathname === item.href
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
