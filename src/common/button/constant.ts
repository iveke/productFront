export enum BORDER_RADIUS {
  DEFAULT = "5px",
}

export enum COLOR {
  white = "#fff",
  blue = "#00f",
  black = "#000",
  red = "#f00",
  green = "#080",
}

export interface ButtonStyledProps {
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
