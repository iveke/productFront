import React, { ReactNode } from "react";

export interface LinkStyledProps{
    children: ReactNode;
    onClick?: Function;
    padding?: string;
    radius?: string;
    path?: string;
}