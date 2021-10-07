import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: Helvetica, Arial, sans-serif;
    line-height: 1.5;
  }
  i {
  font-style: normal;
  }
  input {
  border: none;
  outline: none;
  }
  ul {
  list-style: none;
  }
  h1, h2 {
    font-weight: normal;
    font-size: 1em;
  }
  button {
  cursor: pointer;
  }
`;
export default GlobalStyle;
