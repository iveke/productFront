import React from "react";
import styled from "styled-components";
import { COLOR_DATA } from "../../theme/color.ts";

export const Elem: React.FC = () => {
  return <LabelStyled></LabelStyled>;
};

const LabelStyled = styled.label`
  color: ${COLOR_DATA.label};
`;
