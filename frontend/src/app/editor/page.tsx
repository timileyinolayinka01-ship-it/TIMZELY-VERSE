'use client';

import { ProtectedLayout } from '@/components/layout/protected-layout';
import dynamic from 'next/dynamic';

const EditorShell = dynamic(() => import('@/components/editor/EditorShell'), { ssr: false });

export default function EditorPage() {
  return (
    <ProtectedLayout>
      <EditorShell />
    </ProtectedLayout>
  );
}
