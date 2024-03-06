import styled from "styled-components";

export const Container = styled.div`
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
`;