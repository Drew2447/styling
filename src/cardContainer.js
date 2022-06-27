import styled, { keyframes } from "styled-components";
import { devices } from "./sizes";
import { COLORS } from "./styles";

export const CardContainer = styled.div`
  border: 1px solid ${COLORS.BLACK};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
    background: red;
  }
  50% {
    transform: rotate(180deg);
    background: blue;
  }
  100%{
    transform: rotate(360deg);
    background: red;
  }
  
`;

export const Card = styled.div`
  min-width: 200px;
  height: 300px;
  border: 1px solid ${COLORS.BLACK};


  @media ${devices.tablet} {
    background: red;
    animation: ${rotate} 4s linear infinite;
  }
`;
