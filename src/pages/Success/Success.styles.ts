import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerSuccess = styled.div`
  display: flex;
  /* justify-content: space-between; */

  min-width: 100vw;
  max-width: 100%;
  overflow-x: hidden;

  padding: 4.4rem 11.6rem;

  img {
    width: 80%;
    object-fit: cover;
  }

  @media (max-width: 73.75em) {
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const ContentSuccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  /* flex: 1; */
`;

export const HeaderContentSuccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const BodyContentSuccess = styled.div`
  border: 0.1rem solid;
  border-radius: 6px 36px;
  width: max-content;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};

  @media (max-width: 73.75em) {
    width: 100%;
  }
`;

export const AddressDelivery = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > svg {
      padding: 0.8rem;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`;
