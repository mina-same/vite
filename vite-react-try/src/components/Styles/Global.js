import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body{
    background: ${({theme}) => theme.colors.body};
    color: hsl(192,100%,9%)
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  p{
    opacity: 0.6;
    line-height: 1.5;
  }


  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;