import { FormEventHandler, ReactNode } from "react";
import * as yup from "yup";

export const validateFormShema = yup.object().shape({
  name: yup.string().min(5, "Shortly!").max(30, "Longly").required("Required"),
  price: yup.number().positive().required("Required"),
  description: yup.string().nullable(),
});

export interface FormikProps {
  children?: ReactNode;
  initialValue: {name: string, price: number, description: string | null};
  validationShema?: yup.ObjectSchema<{
    name: string;
    price: number;
    description: string | null;
  }>;
  onSubmit: FormEventHandler;
}

export const formInitialValue = {
    name: '',
    price: '',
    description: ''
}
