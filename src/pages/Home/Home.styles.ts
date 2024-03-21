import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 100vw;
  overflow-x: hidden;
`;

export const ContentHeader = styled.section`
  position: relative;

  img#bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 46.4rem;
    width: 100vw;
    object-fit: cover;
  }
`;

export const ContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 9.4rem 11.6rem;

  gap: 1.6rem;

  img {
    display: flex;
    align-self: flex-start;

    width: 36rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 6.6rem;
  }

  @media (max-width: 60em) {
    padding: 9.4rem 2rem;

    > div {
      gap: 2rem;
    }
  }

  @media (max-width: 43.125em) {
    display: flex;
    flex-direction: column;
    img {
      visibility: hidden;
      max-height: 0;
      max-width: 0;
    }
  }
`;

export const HeadDetails = styled.div`
  h1 {
    ${mixins.fonts.titleXL};

    @media (max-width: 60em) {
      ${mixins.fonts.titleL};
    }
  }
`;

export const TagDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  svg {
    padding: 0.8rem;
    border-radius: 999px;
  }

  span {
    ${mixins.fonts.textM};
  }

  @media (max-width: 60em) {
    grid-template-columns: 1fr;

    svg {
      padding: 0.6rem;
    }
  }
`;

export const ContentList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;
  max-width: 100vw;
  padding: 4rem 11.6rem;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme["base-subtitle"]}
  }

  .listCard {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));
    justify-content: flex-start;
    grid-row-gap: 4rem;
    grid-column-gap: 3.2rem;

    justify-content: flex-start;
  }

  @media (max-width: 60em) {
    padding: 0.5rem 2rem 1rem;
  }
  @media (max-width: 36.5625em) {
    align-items: center;
    .listCard {
      justify-content: center;
    }
  }
`;
