import React from "react";
import styled from "styled-components";
import { HEIGHT_ELEMENT_DATA, WIDTH_ELEMENT_DATA } from "../../theme/size.ts";

export const Elem: React.FC = (props) => {
  return <InputStyled {...props}></InputStyled>;
};

const InputStyled = styled.input`
  width: ${(props) => props.width || WIDTH_ELEMENT_DATA.input};
  height: ${(props) => props.height || HEIGHT_ELEMENT_DATA.input};
`;
