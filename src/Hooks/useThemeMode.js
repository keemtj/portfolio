import { useState } from 'react';

const useThemeMode = () => {
  const isBrowserDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const initMode = isBrowserDarkMode ? 'dark' : 'light';

  const [mode, setMode] = useState(initMode);

  const onToggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  return [mode, onToggleMode];
};

export default useThemeMode;
