import { Field, Form } from "formik";
import styled from "styled-components";

export const FormConteiner = styled.div`
  margin: 0 auto;
  padding: 15px;
  width: 800px;
  height: 240px;
  box-shadow: 0 0 50px #cacfc4;
  border-radius: 10px;
`;

export const Wrap = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;
export const Label = styled.label`
    color: #838383;
`
export const Input = styled(Field)`
  width: 380px;
  height: 25px;
`;

export const Textarea = styled(Field)`
  width: 100%;
  height: 50px;
  resize: none;
`;

export const Btn = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: blue;
`;
