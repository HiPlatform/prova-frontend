import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: #eff1f3;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
     body, input, button {
        font-family: 'Roboto', sans-serif;
         font-size: 16px;
     }
     input[type="checkbox"]{
         cursor: pointer;
     }
     h1, h2, h3, h4, h5, h6, strong {
         font-weight: 500;
     }
     button {
         cursor: pointer;
         background: none;
         border:none;
         outline:none;
     }
     ol,ul,li{
         list-style: none;
     }
`;
