import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > div {
    height: calc(100% - 7rem);
    display: flex;
  }

  main {
    width: calc(100% - 21rem);
    padding: 4rem;
    padding-right: 15rem;
    overflow-y: scroll;

    > div > h1 {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-size: 2.2rem;
      margin-bottom: 3rem;
    }

    > div > div:not(.divIsLoading) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0 3rem;
      position: relative;

      > *:not(.buttonSave, dialog) {
        animation: animateToRight 0.5s forwards;
      }
    }
  }
`;


export const Nav = styled.nav`
  background-color:  ${({ theme }) => theme.COLORS.PURPLE};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  width: 21rem;
  height: 95%;
  border-radius: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  
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
`;