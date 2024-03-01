import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  box-shadow: 0px 10px 13.3px -5px rgba(0, 0, 0, 0.25);

  > div, > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  > button {
    svg:last-of-type {
      transform: rotateX(0deg);
      transition: 0.3s;
    }

    &:hover {
      svg:last-of-type {
        transform: rotateX(180deg);
      }
    }
  }
`;