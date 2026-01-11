export const generateInstallCommand = (extensions) => {
  return extensions
    .map(ext => `code --install-extension ${ext.publisher}.${ext.name.toLowerCase().replace(/\s+/g, '-')}`)
    .join(' && ');
};

export const getTotalExtensionsCount = (stackData) => {
  return Object.keys(stackData).reduce((sum, level) => 
    sum + stackData[level].length, 0
  );
};