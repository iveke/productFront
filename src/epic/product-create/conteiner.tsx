import React from "react";
import { Component } from "./component.tsx";
import { useMutation, useQuery } from "react-query";
import { createProduct } from "./action.ts";
import { useDispatch, useSelector } from "react-redux";
import { selectorCreateProduct } from "../../redux/selectors.js";
import { FORM_VALUE } from "./constant.ts";

export const Container = () => {
  const createProductInfo = useSelector(selectorCreateProduct);
  const dispatch = useDispatch();
  // const { data, isError } = useQuery(
  //   QUERY_KEY_DATA.create,
  //   () => createProduct(createProductInfo),
  //   { keepPreviousData: true, refetchOnWindowFocus: false }
  // );
  const mutation = useMutation((values: FORM_VALUE) => createProduct(values));
  const handleSubmit = (values, { resetForm }) => {
    mutation.mutate(values);
    resetForm();
  };

  return <Component handleSubmit={handleSubmit} />;
};
