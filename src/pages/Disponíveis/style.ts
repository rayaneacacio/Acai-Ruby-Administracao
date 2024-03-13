import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 2rem;
    padding-top: 2rem;
  }

  .divComponentes {
    padding-right: 5px;
    margin-top: 1rem;

    &::-webkit-scrollbar {
      background: transparent;
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PURPLE};
      border-radius: 8px;
    }
  }

  .divIsLoading {
    margin-top: 7rem;
  }

  @media(min-width: 950px) {
    h2 {
      font-size: 2.2rem;
      padding-top: 0;
    }
  }
`;