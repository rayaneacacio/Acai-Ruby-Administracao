import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE_200};
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .logo {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 13rem;
    height: 7rem;
    margin-bottom: 2rem;
  }

  > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 100%;
    height: 100%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    > div, button {
      width: 100%;
    }
  }

  .inputDiv label {
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  input {
    color: black;
    background: none;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 0;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    margin-top: 1rem;
  }

  @media(min-width: 550px) {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};

    > div {
      width: 45rem;
      height: 55rem;
      border-radius: 3rem;
      box-shadow: 0px 11px 99.2px 15px rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;