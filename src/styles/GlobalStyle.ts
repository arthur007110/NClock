import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Azeret+Mono');  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: var(--font-color);
  }

  :root {
    --background: #191622;
    --light-background: #222238;
    --primary: #493C6E;
    --dark-primary: #2D2238;
    --secondary: #576E37;
    --dark-secondary: #415426;
    --font-color: #E1E1E6;
  }
`
