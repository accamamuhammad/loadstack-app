import { Bookmark, BookmarkCheck } from 'lucide-react';
import { getTotalExtensionsCount } from '../utils/helpers';

export default function StackGrid({ 
  darkMode, 
  stacks, 
  extensionData, 
  bookmarkedStacks, 
  onSelectStack, 
  onToggleBookmark 
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {stacks.map((stack) => (
        <button
          key={stack}
          onClick={() => onSelectStack(stack)}
          className={`relative p-5 rounded-lg border ${
            darkMode
              ? 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-750'
              : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-md'
          } transition-all text-left group`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(stack);
            }}
            className="absolute top-3 right-3"
          >
            {bookmarkedStacks.includes(stack) ? (
              <BookmarkCheck className="w-4 h-4 text-blue-600" />
            ) : (
              <Bookmark className={`w-4 h-4 ${darkMode ? 'text-gray-600 group-hover:text-gray-400' : 'text-gray-400 group-hover:text-gray-600'}`} />
            )}
          </button>
          <h3 className="font-semibold mb-1 pr-6">{stack}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {getTotalExtensionsCount(extensionData[stack])} extensions
          </p>
        </button>
      ))}
    </div>
  );
}