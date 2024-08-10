import { useTranslation } from "react-i18next"
import { Text } from "../../common/text/index.ts"

export const ProductList = () => {
const {t, i18n} = useTranslation();
    return <>
    {t(`FORM.INFO_ABOUT_PRODUCT`)}
    <Text></Text>
    <h1>Hello you in Product List</h1>
    </>
}