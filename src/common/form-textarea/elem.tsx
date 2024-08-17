import React from "react";
import styled from "styled-components";
import { HEIGHT_ELEMENT_DATA, WIDTH_ELEMENT_DATA } from "../../theme/size.ts";
import { TextareaStyledProps } from "./constant.ts";
import { Field } from "formik";

export const Elem: React.FC<{type?: string, name: string, value?: string;}> = (props, {field, form}) => {
  return <Field as={TextareaStyled} {...props}></Field>;
};

const TextareaStyled = styled.textarea<TextareaStyledProps>`
  /* width: ${(props) => props.width || WIDTH_ELEMENT_DATA.textarea}; */
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.textarea};
  resize: none;
`;

