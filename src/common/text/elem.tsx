import styled from "styled-components";
import React, { Children } from "react";
import LANG from "../../lang";

export const Text = () => {
    return <TextElem>{LANG.UA.FORM.FORM_INFO.BUTTON.CREATE}</TextElem>
}

export const TextElem = styled.p`
    font-size: large;
`