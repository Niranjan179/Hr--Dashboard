'use client';
export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="space-y-6">
      <div className="flex gap-3 border-b border-indigo-200 dark:border-indigo-800">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-5 py-3 text-base font-semibold transition-all duration-300 ${
              activeTab === tab.name
                ? 'border-b-4 border-indigo-600 text-indigo-600 dark:text-indigo-300'
                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-t-lg'
            }`}
            aria-selected={activeTab === tab.name}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg transition-all duration-300">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
}