import { ReactNode } from "react";

export interface ButtonStyledProps {
  children: ReactNode;
  operation?: (() => void) | undefined;
  type?: string;
  width?: string;
  height?: string;
  delete?: boolean;
  border?: boolean;
  borderColor?: string;
  borderSize?: string;
  borderLine?: string;
  radius?: string;
  margin?: string;
}
