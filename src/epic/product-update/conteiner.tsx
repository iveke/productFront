import React from "react";
import { Component } from "./component.tsx";
import { useDispatch, useSelector } from "react-redux";
import { selectorChangeProduct } from "../../redux/selectors.js";
import { useMutation } from "react-query";
import { FORM_VALUE } from "./constant.ts";
import { updateProduct } from "./action.ts";

export const Container: React.FC = () => {
  const changeInfo = useSelector(selectorChangeProduct);
  const dispatch = useDispatch();
  const mutation = useMutation((data: {id: string, values: FORM_VALUE})=>updateProduct(data))
  return <Component productChangeInfo={changeInfo} dispatch={dispatch} mutation={mutation}/>;
};
