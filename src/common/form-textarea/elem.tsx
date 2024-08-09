import React from "react";
import styled from "styled-components";
import { HEIGHT_ELEMENT_DATA, WIDTH_ELEMENT_DATE } from "../../theme/size.ts";
import { TextareaStyledProps } from "./constant.ts";

export const Elem: React.FC = (props) => {
  return <TextareaStyled {...props}></TextareaStyled>;
};

const TextareaStyled = styled.textarea<TextareaStyledProps>`
  width: ${(props) => props.width || WIDTH_ELEMENT_DATE.textarea};
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.textarea};
  resize: none;
`;
