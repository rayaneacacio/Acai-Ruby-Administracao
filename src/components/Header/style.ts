import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 6rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  box-shadow: 0px 10px 13.3px -5px rgba(0, 0, 0, 0.25);

  .buttonMenuMobile {
    display: block;
    padding-top: 3px;

    svg {
      height: 3rem;
    }
  }

  .title {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  > div {
    width: 100%;
    justify-content: space-between;
  }

  > div, > button {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  h1 {
    font-size: 2rem;
  }

  svg {
    width: 2.5rem;

    path {
      fill: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > button svg {
    display: none;
  }

  > button {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media(min-width: 950px) {
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    height: 7rem;
    padding: 1rem 5rem;
    justify-content: space-between;

    .buttonMenuMobile {
      display: none;
    }

    .title {
      width: auto;

      svg {
        width: 3rem;

        path {
          fill: ${({ theme }) => theme.COLORS.PURPLE};
        }
      }
    }

    h1 {
      font-size: 2.8rem;
    }

    > button {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      display: flex;
      justify-content: center;

      svg {
        display: block;
      }
    }
  }
`;