import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from "./component.tsx";
import { selectorGetList } from "../../redux/selectors.js";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { QUERY_KEY } from "./constant.ts";
import { getProductList } from "./action.ts";
import { ProductAnswerPromise } from "../../lib/axios/constant.ts";

export const Container: React.FC = () => {
//   const list = useSelector(selectorGetList);
  const { data, isLoading, isError } = useQuery<ProductAnswerPromise[]>(
    QUERY_KEY,
    getProductList,
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     // dispatch(getProductList())
  //   }, []);

  return <Component isLoading={isLoading} isError={isError} list={data} />;
};
