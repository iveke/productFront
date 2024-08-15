import React from "react";
import styled from "styled-components";
import { FormContainerStyledProps } from "./constant.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import {
  BORDER_RADIUS_DATA,
  HEIGHT_ELEMENT_DATA,
  WIDTH_ELEMENT_DATA,
} from "../../theme/size.ts";
import { Spacing } from "../../theme/index.ts";
import { Form } from "formik";

export const Elem: React.FC<FormContainerStyledProps> = (
  { children },
  props
) => {
  console.log(children);
  return <FormContainerStyled {...props}>{children}</FormContainerStyled>;
};

const FormContainerStyled = styled(Form)<FormContainerStyledProps>`
  /* display: grid; */
  padding: ${Spacing(3)};
  width: ${(props) => props.width || WIDTH_ELEMENT_DATA.form};
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.form};
  box-shadow: 0 0 50px ${COLOR_DATA.shadow};
  border-radius: ${(props) => props.radius || BORDER_RADIUS_DATA.default};
  row-gap: ${(props) => (props.gap ? Spacing(props.gap) : "none")};
`;
