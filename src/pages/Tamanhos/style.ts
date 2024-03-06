import styled from "styled-components";

export const Container = styled.div`
  > div {
    margin-bottom: 2rem;
  }

  .buttonDelete {
    background: none;
    
    svg {
      width: 4rem;
      height: 4rem;
      transform: rotateZ(45deg);

      path {
        fill: ${({ theme }) => theme.COLORS.PURPLE};
      }
    }
  }
`;