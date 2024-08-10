import React from "react";
import styled from "styled-components";
import { GridStyledProps } from "./constant.ts";
import { Spacing } from "../../theme/service.ts";

export const Elem: React.FC = (props) => {
  return <GridStyled {...props}></GridStyled>;
};

export const GridStyled = styled.div<GridStyledProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.column}, 1fr)`};
  grid-column-gap: ${(props) => props.gapColumn || Spacing(2)};
`;
