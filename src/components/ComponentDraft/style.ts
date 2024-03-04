import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.PURPLE_3};
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;