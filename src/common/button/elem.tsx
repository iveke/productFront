import styled from "styled-components";
import React, { Children } from "react";
import { ButtonStyledProps } from "./constant.ts";
import { Text } from "../text/elem.tsx";
import { COLOR_DATA } from "../../theme/color.ts";
import { BORDER_RADIUS_DATA } from "../../theme/size.ts";

export const Elem: React.FC = (props) => {
  return (
    <ButtonStyled {...props}>
      <Text />
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.height || "30px"};
  border: ${(props) =>
    props.border
      ? `${props.borderSize} ${props.borderLine} ${props.borderColor}`
      : "none"};
  border-radius: ${(props) => props.radius || BORDER_RADIUS_DATA.small};
  color: ${COLOR_DATA.white};
  background-color: ${(props) =>
    props.delete ? COLOR_DATA.red : COLOR_DATA.blue};
`;
