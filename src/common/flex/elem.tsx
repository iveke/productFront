import React from "react";
import styled from "styled-components";
import { Spacing } from "../../theme/service.ts";
import { FlexStyledProps } from "./constant.ts";

export const Elem: React.FC<FlexStyledProps> = (props, { children }) => {
  return <FlexStyled {...props}>{children}</FlexStyled>;
};

export const FlexStyled = styled.div<FlexStyledProps>`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || Spacing(10)};
`;
