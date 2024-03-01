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
    animation: animateToRight 0.5s forwards;

    > h2 {
      color: ${({ theme }) => theme.COLORS.GRAY};
      width: 9.5rem;
      font-size: 2.2rem;
      margin-bottom: 3rem;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.PURPLE_22};
    }

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem 3rem;
    }
  }
`;