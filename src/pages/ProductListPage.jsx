import { useDispatch, useSelector } from "react-redux";
import { selectorGetList } from "../redux/selectors";
import { useEffect } from "react";
import { getProductList } from "../redux/operation";
import { ListProduct } from "../components/ListProduct.jsx/ListProduct";
import { HeaderText } from "../components/BaseStyle/BaseStyle.style";

export const ProductListPage = () => {
  const list = useSelector(selectorGetList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <>
      <HeaderText>Список товарів</HeaderText>
      {list.length > 0 && <ListProduct list={list} />}
    </>
  );
};


