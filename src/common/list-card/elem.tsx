import React from "react";
import styled from "styled-components";
import {
  BORDER_RADIUS_DATA,
  HEIGHT_ELEMENT_DATA,
  WIDTH_ELEMENT_DATA,
} from "../../theme/size.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import { CardStyledProps } from "./constant.ts";

export const Elem: React.FC = (props) => {
  return <CardStyled {...props}></CardStyled>;
};

export const CardStyled = styled.li<CardStyledProps>`
  padding: Spacing(3);
  width: ${(props) => props.width || WIDTH_ELEMENT_DATA.card};
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.card};
  border-radius: ${BORDER_RADIUS_DATA.default};
  box-shadow: 0 0 50px ${COLOR_DATA.shadow};
`;
