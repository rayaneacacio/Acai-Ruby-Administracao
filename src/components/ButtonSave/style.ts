import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  position: absolute;
  top: -5.5rem;
  right: -2rem;
  padding: 1rem 3rem;
  border-radius: 5px;
`;