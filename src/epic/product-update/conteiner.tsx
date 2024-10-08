import React, { useEffect } from "react";
import { Component } from "./component.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { FORM_VALUE, INITIAL_VALUE_DATA, selectorChangeProduct } from "./constant.ts";
import { deleteProduct, updateProduct } from "./action.ts";
import { changeInfo, changingSwitch } from "../../redux/ProductSlice.js";

export const Container: React.FC = () => {
  const changeInfoData = useSelector(selectorChangeProduct);
  const dispatch = useDispatch();
  const mutation = useMutation((data: FORM_VALUE) => updateProduct(data));
  const mutationDel = useMutation((id: string) => deleteProduct(id));

  const handleSubmit = (values, { resetForm }) => {
    mutation.mutate(values);
    dispatch(changeInfo(INITIAL_VALUE_DATA));
    resetForm();
  };
  const handleDelete = () => mutationDel.mutate(changeInfoData.id);

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(changingSwitch(false));
    }
    if (mutationDel.isSuccess) {
      dispatch(changingSwitch(false));
    }
  }, [mutation, mutationDel]);
  return (
    <Component
      productChangeInfo={changeInfoData}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
};
