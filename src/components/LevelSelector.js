import { ChevronLeft } from 'lucide-react';

export default function LevelSelector({ 
  darkMode, 
  selectedStack, 
  extensionData, 
  onSelectLevel, 
  onBack 
}) {
  const levels = ['Junior', 'Mid-level', 'Senior'];

  return (
    <div>
      <button
        onClick={onBack}
        className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-lg ${
          darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
        } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{selectedStack}</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Choose your experience level
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => onSelectLevel(level)}
            className={`p-6 rounded-lg border-2 ${
              darkMode
                ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg'
            } transition-all text-left`}
          >
            <h3 className="text-xl font-bold mb-2">{level}</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {extensionData[selectedStack][level]?.length || 0} extensions
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}