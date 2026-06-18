'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { LogoGrid } from '@/components/dashboard/logo-grid';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      try {
        // Auth check logic here
        setIsLoading(false);
      } catch (error) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">View and manage your generated logos</p>
        </div>
        <LogoGrid />
      </div>
    </DashboardLayout>
  );
}
