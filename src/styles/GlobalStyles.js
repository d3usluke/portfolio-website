import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before  {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *::selection{
    background: ${props => props.theme.colors.text.accent};
    color: ${props => props.theme.colors.text.light};
  }


  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

    /* ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none; */
  }

  body {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background.main};   
    color: ${props => props.theme.colors.text.main};
    cursor: default;
    text-rendering: optimizeSpeed;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
  }

  input,
  textarea { 
    font-family: ${props => props.theme.fonts.main};
    
    &:focus{
      outline: none;
    }
  }

  img,
  picture {
  max-width: 100%;
  display: block;
}
`;

export default GlobalStyles;

export const DynamicGlobalStyles = createGlobalStyle`
  html,
  body,
  #gatsby-focus-wrapper {
    min-height: 100vh;
    overflow: ${({ overflowHidden }) => (overflowHidden ? 'hidden' : null)};
    touch-action: ${({ overflowHidden }) => (overflowHidden ? 'none' : null)};
    -ms-touch-action: ${({ overflowHidden }) =>
      overflowHidden ? 'none' : null};

  }
`;
