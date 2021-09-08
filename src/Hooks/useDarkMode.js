import { useState } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useState('light');

  const onToggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  return [mode, onToggleMode];
};

export default useDarkMode;
