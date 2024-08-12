import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLOR_DATA } from "../../theme/color.ts";
import { Text } from "../text/index.ts";

export const Elem: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <LabelStyled>
      <Text>{children}</Text>
    </LabelStyled>
  );
};

const LabelStyled = styled.label`
  color: ${COLOR_DATA.label};
`;
