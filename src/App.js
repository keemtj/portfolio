import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Style/GlobalStyle';
import theme from './Style/theme';
import { media } from './Style/media';
import Header from './Components/Global/Header';
import MainRouter from './Routers/MainRouter';
import useThemeMode from './Hooks/useThemeMode';
import Aside from './Components/Global/Aside';
import Footer from './Components/Global/Footer';
import { useHistory } from 'react-router';

function App() {
  const [mode, onToggleMode] = useThemeMode();
  const history = useHistory();

  const onClickHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.push('/');
  };
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={{ ...theme[mode], ...media }}>
      <GlobalStyle />
      <Header
        mode={mode}
        onToggleMode={onToggleMode}
        onClickHome={onClickHome}
      />
      <Aside
        mode={mode}
        onToggleMode={onToggleMode}
        onScrollToTop={onScrollToTop}
      />
      <MainRouter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
