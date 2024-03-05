import styled from "styled-components";

export const Container = styled.dialog`
  div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 40rem;
    height: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    box-shadow: 0px 2px 16px 1px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  button {
    padding: 5px 3rem;
  }
`;