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
import {
  Btn,
  BtnWrap,
  FormConteiner,
  Input,
  Label,
  Textarea,
  Wrap,
} from "./UpdateProduct.style";
import { changeInfo } from "../../redux/ProductSlice";
import { selectorChangeProduct } from "../../redux/selectors";
import { deleteProduct, updateProduct } from "../../redux/operation";
// import { createProduct } from "../../redux/operation";
import {LANG} from "../../lang";

const initial = { name: "", price: "", description: "" };

const Textareas = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

export const UpdateProductForm = () => {
  const dispatch = useDispatch();
  const changeInfo = useSelector(selectorChangeProduct);
  return (
    <>
      <Formik
        initialValues={changeInfo}
        onSubmit={(values, { resetForm }) => {
          const { name, price, description } = values;
          dispatch(
            updateProduct({
              id: changeInfo.id,
              data: { name, price, description },
            })
          );
          dispatch(changeInfo(values));
          resetForm();
        }}
      >
        <FormConteiner>
          <h4>{LANG.UA.FORM.INFO_ABOUT_PRODUCT}</h4>
          <Form>
            <Wrap>
              <Label htmlFor="name">{LANG.UA.FORM.FORM_INFO.LABEL.NAME}</Label>
              <Label htmlFor="price">
                {LANG.UA.FORM.FORM_INFO.LABEL.PRICE}
              </Label>
              <Label htmlFor="id">{LANG.UA.FORM.FORM_INFO.LABEL.ID}</Label>
              <Input name="name" type="text" />
              <Input name="price" type="number" />
              <Input name="id" disabled />
            </Wrap>
            <Label htmlFor="description">
              {LANG.UA.FORM.FORM_INFO.LABEL.DESCRIPTION}
            </Label>
            <Textarea name="description" component={Textareas} />
            <BtnWrap>
              <Btn type="submit">{LANG.UA.FORM.FORM_INFO.BUTTON.EDIT}</Btn>
              <Btn
                type="button"
                onClick={() => dispatch(deleteProduct(changeInfo.id))}
                delete="true"
              >
                {LANG.UA.FORM.FORM_INFO.BUTTON.DELETE}
              </Btn>
            </BtnWrap>
          </Form>
        </FormConteiner>
      </Formik>
    </>
  );
};
