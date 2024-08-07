import { Field, Formik, Form, validateYupSchema } from "formik";
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
import * as yup from 'yup';
import LANG from "../../lang";
import { Button } from "../../common/button/elem.tsx";


const validateShema = yup.object().shape({
  name: yup.string().min(5, 'Shortly!').max(30, 'Longly').required('Required'),
  price: yup.number().positive().required('Required'),
  description: yup.string().nullable(),
})
const initial = { name: "", price: "", description: "" };

const Textareas = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

export const CreateProductForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
    validationSchema={validateShema}
      initialValues={initial}
      onSubmit={(values, { resetForm }) => {
        dispatch(createProduct(values));
        resetForm();
      }}
    >
      <FormConteiner>
        <h4>{LANG.UA.FORM.INFO_ABOUT_PRODUCT}</h4>
        <Form>
          <Wrap>
            <Label htmlFor="name">{LANG.UA.FORM.FORM_INFO.LABEL.NAME}</Label>
            <Label htmlFor="price">{LANG.UA.FORM.FORM_INFO.LABEL.PRICE}</Label>
            <Input name="name" type="text" />
            <Input name="price" type="number" />
          </Wrap>
          <Label htmlFor="description">{LANG.UA.FORM.FORM_INFO.LABEL.DESCRIPTION}</Label>
          <Textarea name="description" component={Textareas} />
          <Button />
          {/* <Btn type="submit">{LANG.UA.FORM.FORM_INFO.BUTTON.CREATE} </Btn> */}
        </Form>
      </FormConteiner>
    </Formik>
  );
};
