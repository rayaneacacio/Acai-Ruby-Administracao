import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.8rem;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      background: transparent;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PURPLE_22};
      border-radius: 2px;
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 2.8rem;
  }

  button {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.3s;
    outline: ${({ theme }) => theme.COLORS.WHITE};
  }

  button:hover {
    filter: brightness(0.7);
  }

  @keyframes animateToRight {
    from {
      transform: translateX(-5rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes animateOpacity {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;