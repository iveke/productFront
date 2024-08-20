import React, { useEffect } from "react";
import { Component } from "./component.tsx";
import { useDispatch, useSelector } from "react-redux";
import { selectorChangeProduct } from "../../redux/selectors.js";
import { useMutation } from "react-query";
import { FORM_VALUE } from "./constant.ts";
import { deleteProduct, updateProduct } from "./action.ts";
import { changingSwitch } from "../../redux/ProductSlice.js";

export const Container: React.FC = () => {
  const changeInfo = useSelector(selectorChangeProduct);
  const dispatch = useDispatch();
  const mutation = useMutation((data: FORM_VALUE) => updateProduct(data));
  const mutationDel = useMutation((id: string) => deleteProduct(id));
  useEffect(()=>{
    if(mutation.isSuccess){
        dispatch(changingSwitch(false));
    }
    if(mutationDel.isSuccess){
        dispatch(changingSwitch(false))
    }
  }, [mutation, mutationDel])
  return (
    <Component
      productChangeInfo={changeInfo}
      dispatch={dispatch}
      mutationDel={mutationDel}
      mutation={mutation}
    />
  );
};
