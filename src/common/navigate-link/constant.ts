import React, { ReactNode } from "react";

export interface LinkStyledProps {
  children?: ReactNode;
  to: string;
  onClick?: Function;
  color?: string;
  padding?: string;
  radius?: string;
  path?: string;
}
