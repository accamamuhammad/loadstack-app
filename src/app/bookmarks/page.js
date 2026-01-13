'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookmarkCheck, Trash2 } from 'lucide-react';
import Header from '../../components/Header';
import { extensionData } from '../../data/extensionData';
import { getTotalExtensionsCount } from '../../utils/helpers';

export default function BookmarksPage() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  const [bookmarkedStacks, setBookmarkedStacks] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bookmarkedStacks');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const router = useRouter();

  const handleDarkModeToggle = (value) => {
    setDarkMode(value);
    localStorage.setItem('darkMode', JSON.stringify(value));
  };

  const removeBookmark = (stackName) => {
    const updated = bookmarkedStacks.filter(s => s !== stackName);
    setBookmarkedStacks(updated);
    localStorage.setItem('bookmarkedStacks', JSON.stringify(updated));
  };

  const clearAllBookmarks = () => {
    if (confirm('Are you sure you want to remove all bookmarks?')) {
      setBookmarkedStacks([]);
      localStorage.setItem('bookmarkedStacks', JSON.stringify([]));
    }
  };

  const navigateToStack = (stack) => {
    router.push(`/?stack=${encodeURIComponent(stack)}`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} setDarkMode={handleDarkModeToggle} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <BookmarkCheck className="w-8 h-8 text-blue-600" />
              My Bookmarks
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {bookmarkedStacks.length} {bookmarkedStacks.length === 1 ? 'stack' : 'stacks'} bookmarked
            </p>
          </div>
          {bookmarkedStacks.length > 0 && (
            <button
              onClick={clearAllBookmarks}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                darkMode 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          )}
        </div>

        {bookmarkedStacks.length === 0 ? (
          <div className={`text-center py-16 rounded-lg border-2 border-dashed ${
            darkMode ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <BookmarkCheck className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className="text-xl font-semibold mb-2">No bookmarks yet</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Start bookmarking your favorite stacks to access them quickly
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Browse Stacks
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {bookmarkedStacks.map((stack) => (
              <div
                key={stack}
                className={`relative p-5 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                    : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-md'
                } transition-all`}
              >
                <button
                  onClick={() => removeBookmark(stack)}
                  className={`absolute top-3 right-3 p-1 rounded ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                  title="Remove bookmark"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
                
                <div 
                  onClick={() => navigateToStack(stack)}
                  className="cursor-pointer"
                >
                  <h3 className="font-semibold mb-1 pr-6">{stack}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {extensionData[stack] ? getTotalExtensionsCount(extensionData[stack]) : 0} extensions
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={`mt-8 p-4 rounded-lg border ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            💡 <strong>Tip:</strong> Your bookmarks are saved locally in your browser. When we add database support, your bookmarks will sync across devices.
          </p>
        </div>
      </main>
    </div>
  );
}