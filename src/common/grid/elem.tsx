import React from "react";
import styled from "styled-components";
import { GridStyledProps } from "./constant.ts";
import { Spacing } from "../../theme/index.ts";

export const Elem: React.FC<GridStyledProps> = (props) => {
  return <GridStyled {...props}>{props.children}</GridStyled>;
};

export const GridStyled = styled.div<GridStyledProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.column}, 1fr)` || `repeat(2, 1fr)`};
  grid-column-gap: ${(props) => props.gapColumn || Spacing(2)};
  grid-row-gap: ${(props) => props.gapRow || Spacing(2)};
`;
