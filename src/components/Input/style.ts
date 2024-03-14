import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color:  ${({ theme }) => theme.COLORS.GRAY};
    font-size: 1.6rem;
    font-weight: 500;
  }
`;