import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from "./component.tsx";
import { selectorGetList } from "../../redux/selectors.js";
import { useEffect } from "react";
import { getProductList } from "../../redux/operation.js";

export const Container: React.FC = () => {
  const list = useSelector(selectorGetList);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getProductList())
  }, []);

  return <Component list={list}></Component>;
};
