import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function InstallCommand({ darkMode, command }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-6 rounded-lg border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
    }`}>
      <h3 className="text-xl font-bold mb-4">Installation Command</h3>
      <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
        Copy and paste this command into your terminal to install all extensions:
      </p>
      <div className="relative">
        <pre className={`p-4 rounded-lg overflow-x-auto text-sm ${
          darkMode ? 'bg-gray-900' : 'bg-white border border-gray-200'
        }`}>
          <code className={darkMode ? 'text-gray-300' : 'text-gray-800'}>{command}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className={`absolute top-2 right-2 p-2 rounded-lg ${
            darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>
      <div className={`mt-4 p-4 rounded-lg ${
        darkMode ? 'bg-gray-900' : 'bg-white border border-gray-200'
      }`}>
        <p className="font-semibold mb-2">Instructions:</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open your terminal or command prompt</li>
          <li>Copy the command above</li>
          <li>Paste it into your terminal and press Enter</li>
          <li>Wait for all extensions to install</li>
          <li>Restart VS Code to activate the extensions</li>
        </ol>
        <p className={`mt-3 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
          Note: For VS Code Insiders, replace <code className={`px-1 py-0.5 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>code</code> with <code className={`px-1 py-0.5 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>code-insiders</code>
        </p>
      </div>
    </div>
  );
}