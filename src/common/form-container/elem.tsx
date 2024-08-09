import React from "react";
import styled from "styled-components";
import { FormContainerProps, FormContainerStyledProps } from "./constant.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import { BORDER_RADIUS_DATA } from "../../theme/size.ts";
import { Spacing } from "../../theme/service.ts";

export const Elem: React.FC<FormContainerProps> = ({ children }, props) => {
  return <FormContainerStyled {...props}>{children}</FormContainerStyled>;
};

const FormContainerStyled = styled.div<FormContainerStyledProps>`
  padding: ${Spacing(3)};
  width: ${(props) => props.width || "800px"};
  height: ${(props) => props.height || "240px"};
  box-shadow: 0 0 50px ${COLOR_DATA.shadow};
  border-radius: ${(props) => props.radius || BORDER_RADIUS_DATA.default};
`;
