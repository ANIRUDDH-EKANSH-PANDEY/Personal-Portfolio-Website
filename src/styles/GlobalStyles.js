import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3 {
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
