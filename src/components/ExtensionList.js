import { ExternalLink, CheckCircle2, Circle } from 'lucide-react';

export default function ExtensionList({ darkMode, extensions, selectedExtensions, onToggleExtension }) {
  return (
    <div className="space-y-4 mb-8">
      <div className={`p-4 rounded-lg border ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
      }`}>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          💡 <strong>Tip:</strong> Uncheck extensions you already have installed to exclude them from the installation command
        </p>
      </div>

      {extensions.map((ext, idx) => {
        const isSelected = selectedExtensions.includes(idx);
        return (
          <div
            key={idx}
            className={`p-6 rounded-lg border transition-all cursor-pointer ${
              darkMode
                ? `bg-gray-800 border-gray-700 ${isSelected ? 'ring-2 ring-blue-500' : ''}`
                : `bg-white border-gray-200 ${isSelected ? 'ring-2 ring-blue-500' : ''}`
            }`}
            onClick={() => onToggleExtension(idx)}
          >
            <div className="flex items-start gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleExtension(idx);
                }}
                className="mt-1 shrink-0"
              >
                {isSelected ? (
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                ) : (
                  <Circle className={`w-6 h-6 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                )}
              </button>
              
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-1 ${!isSelected && 'opacity-50'}`}>
                  {ext.name}
                </h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'} ${!isSelected && 'opacity-50'}`}>
                  by {ext.publisher}
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} ${!isSelected && 'opacity-50'}`}>
                  {ext.description}
                </p>
              </div>

              <a
                href={ext.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`ml-4 p-2 rounded-lg shrink-0 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}