import { useDispatch, useSelector } from "react-redux";
import { selectorGetList } from "../redux/selectors";
import { useEffect } from "react";
import { getProductList } from "../redux/operation";
import { ListProduct } from "../components/ListProduct.jsx/ListProduct";
import { HeaderText } from "../components/BaseStyle/BaseStyle.style";
import { List } from "../epic/product-list/index.ts";
import { Text } from "../common/text/index.ts";
import { COLOR_DATA } from "../theme/color.ts";
import { FONT_SIZE_DATA } from "../theme/size.ts";

export const ProductListPage = () => {
  const list = useSelector(selectorGetList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <>
      <Text color={COLOR_DATA.blue} font={FONT_SIZE_DATA.header} weight="bold">
        Список товарів
      </Text>
      <List />
      {/* <HeaderText>Список товарів</HeaderText>
        {list.length > 0 && <ListProduct list={list} />} */}
    </>
  );
};
