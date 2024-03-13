import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  > div {
    height: calc(100% - 6rem);
    display: flex;
    position: relative;
  }

  main {
    width: 100%;
    padding: 4rem;
    padding-right: 4rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      background: transparent;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-size: 2.2rem;
    }

    > div {
      height: 100%;
    }

    > div > div {
      display: flex;
      flex-direction: column;
      padding-bottom: 15rem;
      position: relative;

      > *:not(.buttonSave, dialog) {
        animation: animateToRight 0.5s forwards;
      }
    }
  }

  @media(min-width: 950px) {
    > div {
      height: calc(100% - 7rem);
    }

    main {
      width: calc(100% - 21rem);
      margin-left: 22rem;

      h1 {
        margin-bottom: 3rem;
      }

      > div > div:not(.divIsLoading) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0 3rem;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PURPLE_22};
        border-radius: 5px;
      }
    }
  }

  @media(min-width: 1200px) {
    main {
      padding-right: 15rem;
    }
  }
`;


export const Nav = styled.nav`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: 1;

  > div {
    transition: 0.5s;
  }

  .menu {
    background-color:  ${({ theme }) => theme.COLORS.PURPLE};
    color:  ${({ theme }) => theme.COLORS.WHITE};
    width: 23rem;
    height: 100%;
    border-radius: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    animation: animateMenu 0.3s forwards;
  
    > div {
      background-color:  ${({ theme }) => theme.COLORS.PURPLE_22};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem 2rem 1rem 1rem;
      margin: 3rem 0 0;

      > div {
        background-color:  ${({ theme }) => theme.COLORS.WHITE};
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h2 {
        font-weight: 400;
      }
    }

    button {
      color:  ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.6rem;
      font-weight: 500;
      height: 5rem;
    }

    button:hover, button:focus, button:focus-visible, .buttonOnFocus {
      background-color:  ${({ theme }) => theme.COLORS.WHITE};
      color:  ${({ theme }) => theme.COLORS.PURPLE};
    }
  }

  > button {
    background-color: rgba(0,0,0,0.46495094619879207);
    width: 100%;
    height: 100%;
   
    &:hover {
      filter: brightness(0);
    }
  }

  @media(min-width: 950px) {
    display: block !important;
    width: 21rem;
    margin: 1rem;

    .menu {
      width: 21rem;
      height: 95%;
      border-radius: 2rem;
      position: static;
      animation: none;
    }

    > button {
      display: none;
    }
  }
`;