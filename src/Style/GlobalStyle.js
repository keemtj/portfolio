import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  * & {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-snap-type: y proximity;
    overflow-y: scroll;
  }
  html, body  {
    width: 100%;
    height: 100%;
    transition: backgroundColor color 10s ease;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  }
  ul,ol,li {
    list-style: none;
  }
  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    font-size: 10px;
    outline: none;
    line-height: 1;
  }
  h1, h2, h3, h4, h5, h6, ol, li, button, input {
    cursor: pointer;
  }
`;

export default GlobalStyle;
