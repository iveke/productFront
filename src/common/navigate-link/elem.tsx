import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Spacing } from "../../theme/service.ts";
import { BORDER_RADIUS_DATA } from "../../theme/size.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import { LinkStyledProps } from "./constant.ts";

export const Elem: React.FC<LinkStyledProps> = (props, {path}) => {
  return <LinkStyled to={path} {...props}></LinkStyled>;
};

export const LinkStyled = styled(NavLink)<LinkStyledProps>`
  padding: ${(props) => props.padding || Spacing(1)};
  text-decoration: none;
  border-radius: ${(props) => props.radius || BORDER_RADIUS_DATA.default};
  &.active {
    color: ${COLOR_DATA.active};
  }
`;
