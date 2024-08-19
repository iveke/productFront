import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from "./component.tsx";
import { selectorGetList } from "../../redux/selectors.js";
import { useEffect } from "react";
import { useQuery } from "react-query";
import {  QUERY_KEY_DATA } from "./constant.ts";
import { getProductList } from "./action.ts";
import { ProductAnswerPromise } from "../../lib/axios/constant.ts";

export const Container: React.FC = () => {
//   const list = useSelector(selectorGetList);
  const { data, isLoading, isError } = useQuery<ProductAnswerPromise[]>(
    QUERY_KEY_DATA.list,
    getProductList,
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     // dispatch(getProductList())
  //   }, []);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error </h3>;
  }
  if (!data) {
    return <h3>No DATA</h3>;
  }

  return <Component list={data} />;
};
