import { Code2, Moon, Sun, Bookmark } from "lucide-react";
import Link from "next/link";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Code2 className="w-7 h-7 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">Loadstack</h1>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/bookmarks"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                darkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Bookmark className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">
                Bookmarks
              </span>
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
