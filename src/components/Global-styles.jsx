import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --black: #333333;
    --gray: #828282;
    --heading: 700 36px Raleway;
    --body-500: 500 18px Montserrat;
    --body-600: 600 14px Montserrat;
    --body-400: 400 14px Montserrat;
  }

  html,body{
    color: var(--black);
  }

  h1{
    font: var(--heading);
    text-align: center;
    margin-block: 32px 58px;
  }
`

export default GlobalStyles