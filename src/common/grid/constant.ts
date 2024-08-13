import { ReactNode } from "react";

export interface GridStyledProps {
  children: ReactNode;
  column?: number;
  gapColumn?: string;
  gapRow?: string;
}
