import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  * & {
    box-sizing: border-box;
    color: ${({ theme }) => theme.fontColor}
  }
  html {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  html, body  {
    width: 100%;
    height: 100%;
  }
  ul,ol,li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    background: transparent;
    margin: 0;
    padding: 0;
    font-size: inherit;
    outline: none;
  }
`;

export default GlobalStyle;
