import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme['gray-300']};

    background-color: ${(props) => props.theme['gray-900']};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    
    -webkit-font-smoothing: antialiased;
  }
`;
