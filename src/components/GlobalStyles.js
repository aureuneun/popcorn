import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box
  }
  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rgba(20,20,20,0.9);
    color: rgba(250,250,250,0.9);
    padding-top: 60px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
