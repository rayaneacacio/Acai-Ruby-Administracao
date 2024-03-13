import styled from "styled-components";

export const Container = styled.div`
  .divAdicionar {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    margin: 3rem 0 1rem;
  }
  
  .inputDiv {
    width: calc(100% - 5rem);
  }

  @media(min-width: 950px) {
    .divAdicionar {
      margin-bottom: 3rem;
    }
  }
`;