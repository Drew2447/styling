import styled from "styled-components";
import { Text } from "./fonts";
import { COLORS } from "./styles";

const ButtonContanier = styled.button`
  border: 1px solid ${COLORS.BLACK};
  border-radius: 8px;
  color: ${COLORS.BLACK};
  background: ${COLORS.WHITE};
  padding: 0 20px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    background: ${COLORS.RED};
  }
`;

export const Button = (props) => {
  return (
    <ButtonContanier>
      <Text small dark>
        {props.children}
      </Text>
    </ButtonContanier>
  );
};
