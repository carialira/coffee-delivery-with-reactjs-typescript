import styled from "styled-components";

export const ContainerLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: ${({theme})=> theme.background};
  height: 100vh;
  min-width: 100vw;
  overflow: hidden !important;
  
  position: relative;
`;

export const Loader = styled.div`
  position: absolute;
  top: 30%;

  border: 10px solid ${({ theme }) => theme["purple-light"]};
  border-top: 10px solid ${({ theme }) => theme.purple};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
