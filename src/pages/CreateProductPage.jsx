import { HeaderText } from "../components/BaseStyle/BaseStyle.style";
import { CreateProductForm } from "../components/CreateProduct/CreateProductForm";
import { CreateForm } from "../epic/product-create/index.ts";
// import { CreateForm } from "../data/product/frame/product-item-form.component.tsx";

export const CreateProductPage = () => {

  return (
    <>
    <HeaderText>Створеня товару</HeaderText>
      <CreateProductForm />
      {/* <CreateForm /> */}
      <CreateForm></CreateForm>
    </>
  );
};

