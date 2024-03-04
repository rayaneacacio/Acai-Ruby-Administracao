import styled from "styled-components";

export const Container = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr !important;

  > div > div:first-of-type {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  
  .inputDiv {
    width: calc(100% - 5rem);
  }
`;