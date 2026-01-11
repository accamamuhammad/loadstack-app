import { ExternalLink } from 'lucide-react';

export default function ExtensionList({ darkMode, extensions }) {
  return (
    <div className="space-y-4 mb-8">
      {extensions.map((ext, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-lg border ${
            darkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{ext.name}</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                by {ext.publisher}
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {ext.description}
              </p>
            </div>
            <a
              href={ext.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 p-2 rounded-lg ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <ExternalLink className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}