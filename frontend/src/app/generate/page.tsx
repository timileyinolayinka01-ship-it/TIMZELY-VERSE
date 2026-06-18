'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { LogoGenerationForm } from '@/components/generate/logo-generation-form';
import { LogoPreview } from '@/components/generate/logo-preview';

export default function GeneratePage() {
  const [generatedLogos, setGeneratedLogos] = useState<string[]>([]);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LogoGenerationForm onLogosGenerated={setGeneratedLogos} />
        <LogoPreview logos={generatedLogos} />
      </div>
    </DashboardLayout>
  );
}
