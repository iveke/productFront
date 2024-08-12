import styled from "styled-components";
import React, { Children, ReactNode } from "react";
import { LANG } from "../../lang";
import { i18n } from "../../lib/lang/core.js";
import { useTranslation } from "react-i18next";
import { COLOR_DATA } from "../../theme/color.js";
import { FONT_SIZE_DATA } from "../../theme/size.js";
// import { COLOR_DATA } from "../../theme/color.js";

export const Elem: React.FC<{ children: ReactNode }> = (
  props,
  { children }
) => {
  return <TextStyled {...props}>{children}</TextStyled>;
};

export const TextStyled = styled.p`
  color: ${COLOR_DATA.white};
  font-size: ${FONT_SIZE_DATA.text};
`;
