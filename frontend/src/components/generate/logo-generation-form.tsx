'use client';

import { useState } from 'react';

interface LogoGenerationFormProps {
  onLogosGenerated: (logos: string[]) => void;
}

export function LogoGenerationForm({ onLogosGenerated }: LogoGenerationFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    slogan: '',
    industry: '',
    colors: [],
    style: 'modern',
  });

  const styles = ['Minimalist', 'Modern', 'Luxury', 'Tech', 'Vintage', 'Corporate'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Generate logos logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Generate Your Logo</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Business Name
        </label>
        <input
          type="text"
          placeholder="Enter your business name"
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          value={formData.businessName}
          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Slogan
        </label>
        <input
          type="text"
          placeholder="Your company slogan"
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          value={formData.slogan}
          onChange={(e) => setFormData({ ...formData, slogan: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Industry
        </label>
        <input
          type="text"
          placeholder="e.g., Technology, Retail, Healthcare"
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Design Style
        </label>
        <div className="grid grid-cols-2 gap-3">
          {styles.map((style) => (
            <button
              key={style}
              type="button"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                formData.style === style.toLowerCase()
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white'
              }`}
              onClick={() => setFormData({ ...formData, style: style.toLowerCase() })}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Generate Logos
      </button>
    </form>
  );
}
