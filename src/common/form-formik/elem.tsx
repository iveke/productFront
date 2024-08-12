import { Formik } from "formik";
import React, { FormEvent } from "react";
import { FormikProps, formInitialValue, validateFormShema } from "./constant.ts";

export const Elem: React.FC<FormikProps> = ({children, onSubmit}) => {

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(event)
        onSubmit()
    }
    return <Formik initialValues={formInitialValue} validationSchema={validateFormShema} onSubmit={handleSubmit} >{children}</Formik>
}