import React, { ReactNode } from "react";

export interface LinkStyledProps{
    children: ReactNode;
    to: string;
    onClick?: Function;
    padding?: string;
    radius?: string;
    path?: string;
}