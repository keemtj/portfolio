import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Style/GlobalStyle';
import theme from './Style/theme';
import { media } from './Style/media';
import Header from './Components/Header';
import MainRouter from './Routers/MainRouter';
import useThemeMode from './Hooks/useThemeMode';
import Aside from './Components/Aside';

function App() {
  const [mode, onToggleMode] = useThemeMode();

  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={{ ...theme[mode], ...media }}>
      <GlobalStyle />
      <Header
        mode={mode}
        onToggleMode={onToggleMode}
        onScrollToTop={onScrollToTop}
      />
      <Aside
        mode={mode}
        onToggleMode={onToggleMode}
        onScrollToTop={onScrollToTop}
      />
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
