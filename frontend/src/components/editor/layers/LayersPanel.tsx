import React from 'react';

export function LayersPanel() {
  // placeholder layers panel
  return (
    <div>
      <h3 className="font-semibold mb-2">Layers</h3>
      <div className="space-y-2">
        <div className="p-2 bg-white dark:bg-slate-800 rounded">Background</div>
        <div className="p-2 bg-white dark:bg-slate-800 rounded">Shape</div>
        <div className="p-2 bg-white dark:bg-slate-800 rounded">Text</div>
      </div>
    </div>
  );
}
