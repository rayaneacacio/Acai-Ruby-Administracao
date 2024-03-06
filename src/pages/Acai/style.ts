import styled from "styled-components";

export const Container = styled.div`
  > h2:last-of-type {
    margin-top: 4rem;
  }

  > div {
    grid-template-columns: 1fr 1fr 1fr 1fr !important;
  }

  .divCreateComponents {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  
  .inputDiv {
    width: calc(100% - 5rem);
  }
`;