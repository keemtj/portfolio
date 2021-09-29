import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, * & {
    box-sizing: border-box;
  }
  *:not(input, textarea), * &:not(input, textarea) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  html {
    font-size: 10px;
    font-style: italic;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-snap-type: y proximity;
    overflow-y: scroll;
    overflow-x: hidden;
    @media ${({ theme }) => theme.mobile} {
      scroll-snap-type: none;
    }
  }
  html, body {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  }
  body {
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.fontColor};
      &:hover {
        background-color: ${({ theme }) => theme.emphasis};
      }
    }
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
  a{
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.emphasis}
    }
  }
  h1, h2, h3, h4, h5, h6, ol, li, button {
    cursor: pointer;
  }
  input, textarea {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.fontColor};
    font-family: inherit;
    outline: none;
  }
  textarea {
    resize: none;
  }
`;

export default GlobalStyle;
