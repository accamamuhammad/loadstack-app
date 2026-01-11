import { Code2, Moon, Sun } from 'lucide-react';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} w-7 h-7`} />
            <h1 className={darkMode ? "text-white text-xl font-bold" : "text-blue-600 text-xl font-bold"}>Loadstack</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}