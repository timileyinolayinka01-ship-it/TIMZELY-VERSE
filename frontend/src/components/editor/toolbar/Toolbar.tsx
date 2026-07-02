import React from 'react';

interface ToolbarProps {
  onToggleGrid?: () => void;
}

export function Toolbar({ onToggleGrid }: ToolbarProps) {
  return (
    <nav className="w-64 border-r border-gray-200 dark:border-slate-700 p-4">
      <h2 className="font-bold mb-4">Editor</h2>

      <div className="space-y-2">
        <button className="w-full px-4 py-2 bg-white dark:bg-slate-800 rounded shadow">New</button>
        <button className="w-full px-4 py-2 bg-white dark:bg-slate-800 rounded shadow">Open</button>
        <button className="w-full px-4 py-2 bg-white dark:bg-slate-800 rounded shadow">Save</button>
        <button className="w-full px-4 py-2 bg-white dark:bg-slate-800 rounded shadow" onClick={onToggleGrid}>Toggle Grid</button>
        <div className="pt-4">
          <h3 className="text-sm font-medium">Export</h3>
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 bg-white rounded shadow">PNG</button>
            <button className="px-3 py-1 bg-white rounded shadow">SVG</button>
            <button className="px-3 py-1 bg-white rounded shadow">PDF</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
