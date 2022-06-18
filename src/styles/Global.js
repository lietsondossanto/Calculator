import { createGlobalStyle } from "styled-components";

import image from './../assets/images/Sun.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100%;
    min-height: 100%;
  }

  body {
    font-size: 100%;
    font-family: Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.text};
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`

export default GlobalStyle
