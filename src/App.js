import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Style/GlobalStyle';
import theme from './Style/theme';
import media from './Style/media';
import Header from './Components/Header';
import MainRouter from './Routers/MainRouter';
// import useThemeMode from './Hooks/useThemeMode';

function App() {
  // const [mode, onToggleMode] = useThemeMode();

  return (
    <ThemeProvider theme={{ ...theme['light'], ...media }}>
      <GlobalStyle />
      <Header />
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
