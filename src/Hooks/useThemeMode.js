import { useState } from 'react';

const useThemeMode = () => {
  let initMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  const localMode = localStorage.getItem('mode');

  if (localMode) {
    initMode = localMode;
  }

  const [mode, setMode] = useState(initMode);

  const onToggleMode = () => {
    const setting = mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('mode', setting);
    setMode(setting);
  };

  return [mode, onToggleMode];
};

export default useThemeMode;
