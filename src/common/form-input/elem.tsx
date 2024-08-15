import React from "react";
import styled from "styled-components";
import { HEIGHT_ELEMENT_DATA, WIDTH_ELEMENT_DATA } from "../../theme/size.ts";
import { Field } from "formik";

export const Elem: React.FC<{ name: string; value?: string; type?: string }> = (
  props
) => {
  return <InputStyled {...props}></InputStyled>;
};

const InputStyled = styled(Field)`
  width: ${(props) => props.width || WIDTH_ELEMENT_DATA.input};
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.input};
`;
