import React from "react";
import { FormContainer } from "../../common/form-container/index.ts";
import { GridWrap } from "../../common/grid/index.ts";
import { FlexWrap } from "../../common/flex/index.ts";
import { Label } from "../../common/form-label/index.ts";
import { Input } from "../../common/form-input/index.ts";
import { Textarea } from "../../common/form-textarea/index.ts";
import { LANG } from "../../lang/index.js";

export const Component: React.FC = () => {
  return (
    <FormContainer>
      
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
    </FormContainer>
  );
};
