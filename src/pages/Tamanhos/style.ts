import styled from "styled-components";

export const Container = styled.div`
  > div {
    margin-bottom: 2rem;
    flex-direction: row !important;
    gap: 1rem !important;
    padding-bottom: 1rem !important;
  }

  h1 {
    margin-bottom: 2rem;
  }

  input {
    width: 13rem;
  }

  .buttonSaveDesktop {
    display: none;
  }

  .buttonSaveMobile {
    position: static;
    margin: 5rem 0;
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

  @media(min-width: 950px) {
    .buttonSaveDesktop {
      display: block;
    }

    .buttonSaveMobile {
      display: none;
    }

    input {
      width: 100%;
    }
  }
`;