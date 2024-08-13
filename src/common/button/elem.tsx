import styled from "styled-components";
import React, { Children, ReactNode } from "react";
import { ButtonStyledProps } from "./constant.ts";
// import { Text } from "../text/elem.tsx";
import { COLOR_DATA } from "../../theme/color.ts";
import {
  BORDER_RADIUS_DATA,
  HEIGHT_ELEMENT_DATA,
  WIDTH_ELEMENT_DATA,
} from "../../theme/size.ts";

export const Elem: React.FC<ButtonStyledProps> = (props, ) => {
  const {operation, children} = props;
  return <ButtonStyled onClick={()=>operation()} {...props}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${(props) => props.width || WIDTH_ELEMENT_DATA.button};
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.button};
  border: ${(props) =>
    props.border
      ? `${props.borderSize} ${props.borderLine} ${props.borderColor}`
      : "none"};
  border-radius: ${(props) => props.radius || BORDER_RADIUS_DATA.small};
  color: ${COLOR_DATA.white};
  background-color: ${(props) =>
    props.delete ? COLOR_DATA.red : COLOR_DATA.blue};
`;
