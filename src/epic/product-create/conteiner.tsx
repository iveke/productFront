import React from "react";
import { Component } from "./component.tsx";
import { useMutation, useQuery } from "react-query";
import { createProduct } from "./action.ts";
import { FORM_VALUE } from "./constant.ts";

export const Container = () => {
  const mutation = useMutation((values: FORM_VALUE) => createProduct(values));
  const handleSubmit = (values, { resetForm }) => {
    mutation.mutate(values);
    resetForm();
  };

  return <Component handleSubmit={handleSubmit} />;
};
