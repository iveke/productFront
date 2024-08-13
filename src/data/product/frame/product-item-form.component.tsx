import React from "react";
import { FormContainer } from "../../../common/form-container/index.ts";
import { FlexWrap } from "../../../common/flex/index.ts";
import { GridWrap } from "../../../common/grid/index.ts";
import { Label } from "../../../common/form-label/index.ts";
import { Input } from "../../../common/form-input/index.ts";
import { Textarea } from "../../../common/form-textarea/index.ts";
import { LANG } from "../../../lang/index.js";
import { Form } from "../../../common/form-formik/index.ts";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/operation.js";
import { Button } from "../../../common/button/index.ts";

const Elem: React.FC = () => {
    const dispatch = useDispatch();
    
  return (
    
    <Form
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        // dispatch(createProduct(values))
        resetForm();
      }}
    >
      <FormContainer gap={1}>
        <GridWrap column={3}>
          <FlexWrap align="none" justify="start">
            <Label>{LANG.UA.FORM.FORM_INFO.LABEL.NAME}</Label>
            <Input />
          </FlexWrap>
          <FlexWrap align="none" justify="start">
            <Label>{LANG.UA.FORM.FORM_INFO.LABEL.PRICE}</Label>
            <Input />
          </FlexWrap>
        </GridWrap>
        <FlexWrap align="none" justify="start">
          <Label>{LANG.UA.FORM.FORM_INFO.LABEL.DESCRIPTION}</Label>
          <Textarea />
        </FlexWrap>
        <Button type="submit">{LANG.UA.FORM.FORM_INFO.BUTTON.CREATE}</Button>
      </FormContainer>
    </Form>
  );
};



export {Elem as CreateForm};