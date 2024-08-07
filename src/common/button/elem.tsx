import styled from "styled-components";
import React, { Children } from "react";
import { BORDER_RADIUS, ButtonStyledProps, COLOR } from "./constant.ts";
import { Text } from "../text/elem.tsx";

export const Button: React.FC = (props) => {
  return <ButtonStyled {...props}>
    <Text />
  </ButtonStyled>;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${(props) => props.width || '400px'};
  height: ${(props) => props.height || '30px'};
  border: ${props => props.border ? `${props.borderSize} ${props.borderLine} ${props.borderColor}` : 'none'};
  border-radius: ${(props) => props.radius || BORDER_RADIUS.DEFAULT};
  color: ${COLOR.white};
  background-color: ${(props) => (props.delete ? COLOR.red : COLOR.blue)};
`;
