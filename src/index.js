import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './Style/theme';
import App from './App';
import ResetStyle from './Style/ResetStyle';

const root = document.getElementById('root');

ReactDOM.render(
  <>
    <ResetStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  root,
);
