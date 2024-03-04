import styled from "styled-components";

export const Container = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr !important;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
  }
  
  > div > div {
    width: calc(100% - 5rem);
  }
`;