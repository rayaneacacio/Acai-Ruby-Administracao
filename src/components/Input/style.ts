import styled from "styled-components";

export const Container = styled.div`
  label {
    color:  ${({ theme }) => theme.COLORS.GRAY};
    font-size: 1.6rem;
    font-weight: 500;
  }

  .labelFile > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
    height: 5rem;
    padding: 0 1.5rem;
    border-radius: 5px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  #inputImagem {
    display: none;
  }

  select {
    color: ${({ theme }) => theme.COLORS.GRAY};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;