import React from "react";
import { FormContainer } from "../../common/form-container/index.ts";
import { Formik } from "formik";
import { INITIAL_VALUE_DATA } from "../product-create/constant.ts";
import { ComponentProps, validateFormShema } from "./constant.ts";
import { Text } from "../../common/text/index.ts";
import { LANG } from "../../lang/index.js";
import { GridWrap } from "../../common/grid/index.ts";
import { FlexWrap } from "../../common/flex/index.ts";
import { Label } from "../../common/form-label/index.ts";
import { Input } from "../../common/form-input/index.ts";
import { Textarea } from "../../common/form-textarea/index.ts";
import { Button } from "../../common/button/index.ts";
import { FONT_SIZE_DATA } from "../../theme/size.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import { changeInfo } from "../../redux/ProductSlice.js";

export const Component: React.FC<ComponentProps> = ({ productChangeInfo, dispatch, mutation }) => {
  return (
    <Formik
      initialValues={productChangeInfo}
      validationSchema={validateFormShema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
mutation.mutate({data: {id: productChangeInfo.id, values}})
        dispatch(changeInfo(INITIAL_VALUE_DATA))
        // mutation.mutate(values);
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
        <GridWrap column={3}>
          <FlexWrap align="none" justify="start">
            <Label>{LANG.UA.FORM.FORM_INFO.LABEL.NAME}</Label>
            <Input name="name" type="text" />
          </FlexWrap>
          <FlexWrap align="none" justify="start">
            <Label>{LANG.UA.FORM.FORM_INFO.LABEL.PRICE}</Label>
            <Input name="price" type="number" />
          </FlexWrap>
          <FlexWrap align="none" justify="start">
            <Label>{LANG.UA.FORM.FORM_INFO.LABEL.ID}</Label>
            <Input name="id" disabled />
          </FlexWrap>
        </GridWrap>
        <FlexWrap align="none" justify="start">
          <Label>{LANG.UA.FORM.FORM_INFO.LABEL.DESCRIPTION}</Label>
          <Textarea name="description" type="text" />
        </FlexWrap>
        <GridWrap column={2}>
          <Button type="submit">{LANG.UA.FORM.FORM_INFO.BUTTON.EDIT}</Button>
          <Button type="button">{LANG.UA.FORM.FORM_INFO.BUTTON.DELETE}</Button>
        </GridWrap>
      </FormContainer>
    </Formik>
  );
};
