import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  position: absolute;
  bottom: 10rem;
  padding: 1rem 3rem;
  border-radius: 5px;

  @media(min-width: 950px) {
    width: auto;
    top: -5.5rem;
    right: -2rem;
    bottom: revert;
  }
`;