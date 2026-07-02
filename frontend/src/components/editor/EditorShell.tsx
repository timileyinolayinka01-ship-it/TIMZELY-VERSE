import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CanvasStage } from './CanvasStage';
import { Toolbar } from './toolbar/Toolbar';
import { LayersPanel } from './layers/LayersPanel';
import { PropertiesPanel } from './properties/PropertiesPanel';
import { useAuth } from '@/lib/auth-context';

export default function EditorShell() {
  const { user } = useAuth();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(true);

  // autosave timer
  useEffect(() => {
    // placeholder for autosave to Supabase
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950">
      <Toolbar
        onToggleGrid={() => setShowGrid((s) => !s)}
      />

      <main className="flex-1 flex">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl h-[720px] bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4">
            <CanvasStage
              showGrid={showGrid}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>
        </div>

        <aside className="w-80 border-l border-gray-200 dark:border-slate-700 p-4">
          <PropertiesPanel selectedId={selectedId} />
          <div className="mt-6">
            <LayersPanel />
          </div>
        </aside>
      </main>
    </div>
  );
}
