import React from "react";
import { Component } from "./component.tsx";
import { useQuery } from "react-query";
import { QUERY_KEY } from "./constant.ts";
import { getProductList } from "./action.ts";
import { ProductAnswerPromise } from "../../lib/axios/constant.ts";

export const Container: React.FC = () => {
  const { data, isLoading, isError } = useQuery<ProductAnswerPromise[]>(
    QUERY_KEY,
    getProductList,
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );
  return <Component isLoading={isLoading} isError={isError} list={data} />;
};
