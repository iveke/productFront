import styled from "styled-components";
import React, { Children } from "react";
import {LANG} from "../../lang";
import { i18n } from "../../lib/lang/core.js";
import { useTranslation } from "react-i18next";

export const Elem: React.FC = () => {
const {t, i18n} = useTranslation();

console.log(t(`FORM.INFO_ABOUT_PRODUCT`))

console.log(i18n.t(`FORM.INFO_ABOUT_PRODUCT`))

    return <TextElem></TextElem>
}

export const TextElem = styled.p`
    font-size: large;
`