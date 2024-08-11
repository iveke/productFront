import styled from "styled-components";
import React, { Children } from "react";
import {LANG} from "../../lang";
import { i18n } from "../../lib/lang/core.js";
import { useTranslation } from "react-i18next";
// import { COLOR_DATA } from "../../theme/color.js";

export const Elem: React.FC = () => {
const {t, i18n} = useTranslation();

console.log(t(`FORM.INFO_ABOUT_PRODUCT`))

console.log(i18n.t(`INFO_ABOUT_PRODUCT`))

    return <TextElem></TextElem>
}

export const TextElem = styled.p`
`