import { FormikHelpers } from "formik";
import { ReactNode } from "react";

export const AXIOS_URL_DATA = "/";

export enum FORM_VALUE_ENUM {
  NAME = "name",
  PRICE = "price",
  DESCRIPTION = "description",
}
export const INITIAL_VALUE_DATA = {
  [FORM_VALUE_ENUM.NAME]: "",
  [FORM_VALUE_ENUM.PRICE]: 0,
  [FORM_VALUE_ENUM.DESCRIPTION]: "",
};

export interface FORM_VALUE {
  name: string;
  price: number;
  description: string | null;
}

export interface ComponentProps {
  handleSubmit: (
    values: { name: string; price: number; description: string },
    formikHelpers: FormikHelpers<{
      name: string;
      price: number;
      description: string;
    }>
  ) => void | Promise<any>;
}
