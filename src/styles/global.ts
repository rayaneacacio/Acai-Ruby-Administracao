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
    background: ${({ theme }) => theme.COLORS.WHITE_200};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.8rem;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      background: transparent;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PURPLE_22};
      border-radius: 5px;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
  }

  .spin {
    background: linear-gradient(to right, ${({ theme }) => theme.COLORS.WHITE}, rgb(15 32 40 / 0.44), ${({ theme }) => theme.COLORS.GRAY} );
    background-size: 400% 400%;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    animation: spinLoading 2s ease infinite;
    cursor: progress;
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

  @keyframes spinLoading {
    to { 
      transform: rotate(0deg); 
    }

    from { 
      transform: rotate(360deg); 
    }
  }
`;