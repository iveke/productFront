import React, { ReactNode } from "react";
import styled from "styled-components";
import { MenuStyledProps } from "./constant.ts";
import { HEIGHT_ELEMENT_DATA } from "../../theme/size.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import { Spacing } from "../../theme/index.ts";

export const Elem: React.FC<{children?: ReactNode}> = (props) => {
  const {children} = props;
  return <MenuStyled {...props}>{children}</MenuStyled>;
};

export const MenuStyled = styled.ul<MenuStyledProps>`
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.menu};
  padding: ${(props) => props.padding || Spacing(6)};
  background-color: ${COLOR_DATA.blue};
`;
