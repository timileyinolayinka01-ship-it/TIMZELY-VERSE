import React from 'react';

interface PropertiesPanelProps {
  selectedId?: string | null;
}

export function PropertiesPanel({ selectedId }: PropertiesPanelProps) {
  // placeholder properties
  return (
    <div>
      <h3 className="font-semibold mb-2">Properties</h3>
      {selectedId ? (
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-500">Fill</label>
            <input type="color" className="w-full h-8" />
          </div>

          <div>
            <label className="block text-xs text-gray-500">Font</label>
            <select className="w-full py-2">
              <option>Inter</option>
              <option>Montserrat</option>
            </select>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-500">Select an object to see properties</p>
      )}
    </div>
  );
}
