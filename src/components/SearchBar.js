import { Search } from 'lucide-react';

export default function SearchBar({ darkMode, searchQuery, setSearchQuery }) {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
        <input
          type="text"
          placeholder="Search stacks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
            darkMode
              ? 'bg-gray-800 border-gray-700 focus:border-blue-500'
              : 'bg-white border-gray-300 focus:border-blue-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
        />
      </div>
    </div>
  );
}