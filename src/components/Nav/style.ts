import styled from "styled-components";

export const Container = styled.nav`
  background-color:  ${({ theme }) => theme.COLORS.PURPLE};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  width: 21rem;
  height: 95%;
  border-radius: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 16px 1px rgba(0, 0, 0, 0.15);

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

    &:hover, &:focus, &:focus-visible {
      background-color:  ${({ theme }) => theme.COLORS.WHITE};
      color:  ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
`;