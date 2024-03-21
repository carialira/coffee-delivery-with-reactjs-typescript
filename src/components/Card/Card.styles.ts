import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* width: 25.6rem; */

  background-color: ${({ theme }) => theme["base-card"]};

  border-radius: 6px 36px;
`;

export const CoffeeImage = styled.img`
  transform: translateY(-20%);
  max-width: 12rem;
  max-height: 12rem;
  align-self: center;
`;

export const TagCoffee = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  gap: 0.4rem;

  span {
    border-radius: 100px;
    padding: 0.4rem 0.8rem;
    background: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`;

export const OrderCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.4rem 2rem;
  width: 100%;

  div {
    display: flex;
  }
`;

export const Buy = styled.button`
  display: flex;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["purple-dark"]};
  transition: background-color 1s;

  margin-left: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`;

export const Title = styled.h3`
  padding: 1.6rem 2rem 0.8rem;
  color: ${({ theme }) => theme["base-subtitle"]};
  ${mixins.fonts.titleS}
`;

export const Description = styled.span`
  padding: 0 2rem 3.3rem;

  display: -webkit-box;
  max-height: 4em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme["base-label"]};
  ${mixins.fonts.textS}
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;

  gap: 0.2rem;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme["base-text"]};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme["base-text"]};
  }
`;
