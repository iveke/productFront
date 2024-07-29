import { Field, Formik, Form } from "formik";
import {
  Btn,
  FormConteiner,
  Forms,
  Input,
  Label,
  Textarea,
  Wrap,
} from "./CreateProductForm.style";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/operation";

const initial = { name: "", price: "", description: "" };

const Textareas = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

export const CreateProductForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initial}
      onSubmit={(values, { resetForm }) => {
        dispatch(createProduct(values));
        resetForm();
      }}
    >
      <FormConteiner>
        <h4>Інформація про товар</h4>
        <Form>
          <Wrap>
            <Label htmlFor="name">Назва товару</Label>
            <Label htmlFor="price">Ціна товару</Label>
            <Input name="name" type="text" />
            <Input name="price" type="number" />
          </Wrap>
          <Label htmlFor="description">Короткий опис</Label>
          <Textarea name="description" component={Textareas} />
          <Btn type="submit">Створити товар </Btn>
        </Form>
      </FormConteiner>
    </Formik>
  );
};
