import { ReactNode } from "react";
import * as yup from "yup";

export const validateFormShema = yup.object().shape({
  name: yup.string().min(5, "Shortly!").max(30, "Longly").required("Required"),
  price: yup.number().positive().required("Required"),
  description: yup.string().nullable(),
});


export enum FORM_VALUE_ENUM{
    NAME ="name",
    PRICE = "price",
    DESCRIPTION = "description"
}
export const INITIAL_VALUE_DATA ={
[FORM_VALUE_ENUM.NAME]: "",
[FORM_VALUE_ENUM.PRICE]: 0,
[FORM_VALUE_ENUM.DESCRIPTION]: "",
}

export interface FORM_VALUE{
name: string;
price: number; 
description: string | null;
}