export function FeaturesSection() {
  const features = [
    {
      title: 'AI-Powered Generation',
      description: 'Advanced AI generates multiple professional logo concepts',
      icon: '🤖',
    },
    {
      title: 'Multiple Design Styles',
      description: 'Choose from Minimalist, Modern, Luxury, Tech, Vintage, and Corporate styles',
      icon: '🎨',
    },
    {
      title: 'Easy Customization',
      description: 'Drag-and-drop editor with full color and font customization',
      icon: '✏️',
    },
    {
      title: 'Multiple Export Formats',
      description: 'Download in PNG, SVG, PDF with transparent backgrounds',
      icon: '📥',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
