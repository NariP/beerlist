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
  margin-bottom: 0;
  }
  h1, h2 {
    font-weight: normal;
    font-size: 1em;
  }
  button {
  cursor: pointer;
  }
  img {
  display: block;
  }
  a{
  color: #333;
  }
  p {
  margin-bottom: 0;
  }
`;
export default GlobalStyle;
