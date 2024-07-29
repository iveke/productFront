import { Field, Formik, Form } from "formik";
// import {
//   Btn,
//   FormConteiner,
//   Forms,
//   Input,
//   Textarea,
//   Wrap,
// } from "./CreateProductForm.style";
import { useDispatch, useSelector } from "react-redux";
import { Btn, BtnWrap, FormConteiner, Input, Label, Textarea, Wrap } from "./UpdateProduct.style";
import { changeInfo } from "../../redux/ProductSlice";
import { selectorChangeProduct } from "../../redux/selectors";
import { deleteProduct, updateProduct } from "../../redux/operation";
// import { createProduct } from "../../redux/operation";

const initial = { name: "", price: "", description: "" };

const Textareas = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

export const UpdateProductForm = () => {
  const dispatch = useDispatch();
  const changeInfo = useSelector(selectorChangeProduct)
  return (
    <>
        <Formik
      initialValues={changeInfo}
      onSubmit={(values, { resetForm }) => {
        const {name, price, description} = values; 
        dispatch(updateProduct({id:changeInfo.id, data: {name, price, description}}));
        dispatch(changeInfo(values));
        resetForm();
      }}
    >
      <FormConteiner>
        <h4>Інформація про товар</h4>
        <Form>
          <Wrap>
            <Label htmlFor="name">Назва товару</Label>
            <Label htmlFor="price">Ціна товару</Label>
            <Label htmlFor="id">ID</Label>
            <Input name="name" type="text" />
            <Input name="price" type="number" />
            <Input name="id" disabled />
          </Wrap>
          <Label htmlFor="description">Короткий опис</Label>
          <Textarea name="description" component={Textareas} />
          <BtnWrap>
          <Btn type="submit">Зберегти оновлення</Btn>
          <Btn type="button" onClick={()=>dispatch(deleteProduct(changeInfo.id))} delete="true">Видалити товар</Btn>  
          </BtnWrap>
        </Form>
      </FormConteiner>
    </Formik>
    </>

  );
};