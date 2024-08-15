import React from "react";
import styled from "styled-components";
import { Spacing } from "../../theme/index.ts";
import { FlexStyledProps } from "./constant.ts";

export const Elem: React.FC<FlexStyledProps> = (props) => {
  return <FlexStyled {...props}>{props.children}</FlexStyled>;
};

export const FlexStyled = styled.div<FlexStyledProps>`
  display: flex;
  justify-content: ${(props) => props.justify || "none"};
  align-items: ${(props) => props.align || "none"};
  flex-direction: ${props => props.direct || "column"};
  gap: ${(props) => props.gap ? Spacing(props.gap) : 'none'};
`;
