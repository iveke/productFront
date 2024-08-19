import { Formik } from "formik";
import React from "react";
import { FORM_VALUE, INITIAL_VALUE_DATA, validateFormShema } from "./constant.ts";
import { FormContainer } from "../../common/form-container/index.ts";
import { GridWrap } from "../../common/grid/index.ts";
import { FlexWrap } from "../../common/flex/index.ts";
import { Label } from "../../common/form-label/index.ts";
import { Input } from "../../common/form-input/index.ts";
import { LANG } from "../../lang/index.js";
import { Textarea } from "../../common/form-textarea/index.ts";
import { Button } from "../../common/button/index.ts";
import { Text } from "../../common/text/index.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import { FONT_SIZE_DATA } from "../../theme/size.ts";
import { createProductInfo } from "../../redux/ProductSlice.js";
import { Dispatch } from "@reduxjs/toolkit";
import { UseMutationResult } from "react-query";
import { ProductAnswerPromise } from "../../lib/axios/constant.ts";

export const Component: React.FC<{
  mutation: UseMutationResult<ProductAnswerPromise[], unknown, FORM_VALUE, unknown>;
}> = ({ mutation }) => {
  return (
    <>
      <Formik
        initialValues={INITIAL_VALUE_DATA}
        validationSchema={validateFormShema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          mutation.mutate(values);
          resetForm();
        }}
      >
        <FormContainer>
          <Text
            color={COLOR_DATA.black}
            weight="bold"
            font={FONT_SIZE_DATA.miniheader}
          >
            {LANG.UA.FORM.INFO_ABOUT_PRODUCT}
          </Text>
          <GridWrap column={2}>
            <FlexWrap align="none" justify="start">
              <Label>{LANG.UA.FORM.FORM_INFO.LABEL.NAME}</Label>
              <Input name="name" type="text" />
            </FlexWrap>
            <FlexWrap align="none" justify="start">
              <Label>{LANG.UA.FORM.FORM_INFO.LABEL.PRICE}</Label>
              <Input name="price" type="number" />
            </FlexWrap>
          </GridWrap>
          <FlexWrap align="none" justify="start">
            <Label>{LANG.UA.FORM.FORM_INFO.LABEL.DESCRIPTION}</Label>
            <Textarea name="description" type="text" />
          </FlexWrap>
          <Button type="submit">{LANG.UA.FORM.FORM_INFO.BUTTON.CREATE}</Button>
        </FormContainer>
      </Formik>
    </>
  );
};
