import styled from "styled-components";
import { COLOR_DATA } from "../../theme/color.ts";
import React, { ReactNode } from "react";

export const Elem: React.FC<{ children?: ReactNode; backColor?: string }> = (
  props
) => {
  const { children } = props;
  return <PageStyled {...props}>{children}</PageStyled>;
};

export const PageStyled = styled.div<{ backColor?: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.backColor || COLOR_DATA.white};
`;
