'use client';

interface LogoPreviewProps {
  logos: string[];
}

export function LogoPreview({ logos }: LogoPreviewProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Generated Logos</h2>
      {logos.length === 0 ? (
        <div className="flex items-center justify-center h-64 bg-gray-100 dark:bg-slate-700 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">Your generated logos will appear here</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="aspect-square bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden">
              <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
