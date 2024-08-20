import { HeaderText } from "../components/BaseStyle/BaseStyle.style";
import { UpdateProductForm } from "../components/UpdateProduct/UpdateProductForm";
import { FormUpdate } from "../epic/product-update/index.ts";

export const UpdateProductPage = () => {
  return (
    <>
      <HeaderText>Редагування товару</HeaderText>
      <FormUpdate></FormUpdate>
      {/* <UpdateProductForm /> */}
    </>
  );
};
