"use client";

import Link from "next/link";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import StackGrid from "../components/StackGrid";
import LevelSelector from "../components/LevelSelector";
import ExtensionList from "../components/ExtensionList";
import InstallCommand from "../components/InstallCommand";
import { extensionData } from "../data/extensionData";
import { generateInstallCommand } from "../utils/helpers";

type StackName = keyof typeof extensionData;
type LevelName = keyof (typeof extensionData)[StackName];

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStack, setSelectedStack] = useState<StackName | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<LevelName | null>(null);
  const [bookmarkedStacks, setBookmarkedStacks] = useState<StackName[]>([]);

  const toggleBookmark = (stackName: StackName) => {
    setBookmarkedStacks((prev) =>
      prev.includes(stackName)
        ? prev.filter((s) => s !== stackName)
        : [...prev, stackName]
    );
  };

  const filteredStacks = (Object.keys(extensionData) as StackName[]).filter(
    (stack) => stack.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetSelection = () => {
    setSelectedStack(null);
    setSelectedLevel(null);
  };

  const handleSelectStack = (stack: StackName) => {
    setSelectedStack(stack);
  };

  const handleSelectLevel = (level: LevelName) => {
    setSelectedLevel(level);
  };

  const getInstallCommand = () => {
    if (!selectedStack || !selectedLevel) return "";
    return generateInstallCommand(extensionData[selectedStack][selectedLevel]);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedStack && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Discover VS Code Extensions
              </h2>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
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
              onClick={() => setSelectedLevel(null)}
              className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                {selectedStack} - {selectedLevel}
              </h2>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {extensionData[selectedStack][selectedLevel].length} recommended
                extensions
              </p>
            </div>

            <ExtensionList
              darkMode={darkMode}
              extensions={extensionData[selectedStack][selectedLevel]}
            />

            <InstallCommand darkMode={darkMode} command={getInstallCommand()} />
          </div>
        )}
      </main>

      <footer
        className={`mt-16 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        } py-8`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="https://x.com/accama17"
            className={`${
              darkMode
                ? "text-gray-500 hover:text-blue-100"
                : "text-gray-600 hover:text-blue-800"
            }`}
          >
            Built By Accama
          </Link>
        </div>
      </footer>
    </div>
  );
}
