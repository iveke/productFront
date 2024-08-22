import { Dispatch } from "@reduxjs/toolkit";
import { UseMutationResult } from "react-query";
import { ProductAnswerPromise } from "../../lib/axios/constant.ts";
import { FormikHelpers } from "formik";

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
  id?: string;
  name: string;
  price: number;
  description: string | null;
}

export interface ComponentProps {
  productChangeInfo: {
    name: string;
    price: number;
    description: string;
    id: string;
  };
//   dispatch: Dispatch;
//   mutation: UseMutationResult<
//     ProductAnswerPromise,
//     unknown,
//     FORM_VALUE,
//     unknown
//   >;
//   mutationDel: UseMutationResult<
//     ProductAnswerPromise,
//     unknown,
//     string,
//     unknown
//   >;
handleSubmit: (
    values: { name: string; price: number; description: string; id: string; },
    formikHelpers: FormikHelpers<{ name: string; price: number; description: string; id: string; }>
  ) => void | Promise<any>;
  handleDelete: () => void;
}
