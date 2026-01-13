'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import StackGrid from '../components/StackGrid';
import LevelSelector from '../components/LevelSelector';
import ExtensionList from '../components/ExtensionList';
import InstallCommand from '../components/InstallCommand';
import { extensionData } from '../data/extensionData';
import { generateInstallCommand } from '../utils/helpers';

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStack, setSelectedStack] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  const [bookmarkedStacks, setBookmarkedStacks] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bookmarkedStacks');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const [selectedExtensions, setSelectedExtensions] = useState([]);

  const handleDarkModeToggle = (value) => {
    setDarkMode(value);
    localStorage.setItem('darkMode', JSON.stringify(value));
  };

  const toggleBookmark = (stackName) => {
    const updated = bookmarkedStacks.includes(stackName)
      ? bookmarkedStacks.filter(s => s !== stackName)
      : [...bookmarkedStacks, stackName];
    setBookmarkedStacks(updated);
    localStorage.setItem('bookmarkedStacks', JSON.stringify(updated));
  };

  const filteredStacks = Object.keys(extensionData).filter(stack =>
    stack.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetSelection = () => {
    setSelectedStack(null);
    setSelectedLevel(null);
    setSelectedExtensions([]);
  };

  const handleSelectStack = (stack) => {
    setSelectedStack(stack);
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    // Select all extensions by default when a level is chosen
    const extensionCount = extensionData[selectedStack][level].length;
    setSelectedExtensions(Array.from({ length: extensionCount }, (_, i) => i));
  };

  const toggleExtension = (index) => {
    setSelectedExtensions(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const selectAllExtensions = () => {
    const extensionCount = extensionData[selectedStack][selectedLevel].length;
    setSelectedExtensions(Array.from({ length: extensionCount }, (_, i) => i));
  };

  const deselectAllExtensions = () => {
    setSelectedExtensions([]);
  };

  const getInstallCommand = () => {
    if (!selectedStack || !selectedLevel || selectedExtensions.length === 0) return '';
    const allExtensions = extensionData[selectedStack][selectedLevel];
    const selectedExts = selectedExtensions.map(idx => allExtensions[idx]);
    return generateInstallCommand(selectedExts);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} setDarkMode={handleDarkModeToggle} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedStack && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Discover VS Code Extensions</h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Curated extension packs for developers at every level
              </p>
            </div>

            <SearchBar 
              darkMode={darkMode} 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />

            <StackGrid
              darkMode={darkMode}
              stacks={filteredStacks}
              extensionData={extensionData}
              bookmarkedStacks={bookmarkedStacks}
              onSelectStack={handleSelectStack}
              onToggleBookmark={toggleBookmark}
            />
          </>
        )}

        {selectedStack && !selectedLevel && (
          <LevelSelector
            darkMode={darkMode}
            selectedStack={selectedStack}
            extensionData={extensionData}
            onSelectLevel={handleSelectLevel}
            onBack={resetSelection}
          />
        )}

        {selectedStack && selectedLevel && (
          <div>
            <button
              onClick={() => {
                setSelectedLevel(null);
                setSelectedExtensions([]);
              }}
              className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
              } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedStack} - {selectedLevel}
                </h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedExtensions.length} of {extensionData[selectedStack][selectedLevel].length} extensions selected
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={selectAllExtensions}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Select All
                </button>
                <button
                  onClick={deselectAllExtensions}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Deselect All
                </button>
              </div>
            </div>

            <ExtensionList
              darkMode={darkMode}
              extensions={extensionData[selectedStack][selectedLevel]}
              selectedExtensions={selectedExtensions}
              onToggleExtension={toggleExtension}
            />

            <InstallCommand
              darkMode={darkMode}
              command={getInstallCommand()}
              selectedCount={selectedExtensions.length}
              totalCount={extensionData[selectedStack][selectedLevel].length}
            />
          </div>
        )}
      </main>

      <footer className={`mt-16 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            Made for VS Code developers
          </p>
        </div>
      </footer>
    </div>
  );
}