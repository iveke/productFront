import { useTranslation } from "react-i18next";
import { Text } from "../../common/text/index.ts";
import { i18n } from "../../lib/lang/core.js";

export const ProductList = () => {
  const { t } = useTranslation();
  return (
    <>
      {t(`INFO_ABOUT_PRODUCT`)}
      {i18n.t("INFO_ABOUT_PRODUCT")}
      <Text></Text>
      <h1>Hello you in Product List</h1>
    </>
  );
};
