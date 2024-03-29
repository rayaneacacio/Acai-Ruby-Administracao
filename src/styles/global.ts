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

  body {
    background: ${({ theme }) => theme.COLORS.WHITE_200};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.8rem;
    height: 100vh;
    overflow: hidden;
  }

  h1, h2 {
    font-size: 2.8rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
  }

  button {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    background: none;
    color:  ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    outline: ${({ theme }) => theme.COLORS.PURPLE};
    -webkit-tap-highlight-color: transparent;
  }

  button:hover {
    filter: brightness(0.7);
  }

  input, select {
    background-color:  ${({ theme }) => theme.COLORS.WHITE};
    color:  ${({ theme }) => theme.COLORS.PURPLE_22};
    font-size: 1.6rem;
    width: 100%;
    padding: 1.5rem;
    border-radius: 5px;
    margin-top: 3px;
    outline: 0;

    &::placeholder {
      color:  ${({ theme }) => theme.COLORS.GRAY};
      font-size: 1.4rem;
    }
  }

  dialog {
    background-color: rgba(8, 8, 8, 0.64);
    color: ${({ theme }) => theme.COLORS.PURPLE};
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: 1;
    animation: none;
  }

  .divIsLoading {
    width: 100%;
    height: calc(100% - 25rem);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: progress;
  }

  .spin {
    background: linear-gradient(to right, ${({ theme }) => theme.COLORS.WHITE}, rgb(15 32 40 / 0.44), ${({ theme }) => theme.COLORS.GRAY} );
    background-size: 400% 400%;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    animation: spinLoading 2s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      background-color: ${({ theme }) => theme.COLORS.WHITE_200};
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
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

  @keyframes animateMenu {
    from {
      transform: translateX(-23rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes spinLoading {
    from { 
      transform: rotate(360deg); 
    }
    to { 
      transform: rotate(0deg); 
    }
  }
`;