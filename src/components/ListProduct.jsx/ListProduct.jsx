import { useDispatch } from "react-redux";
import {
  Btn,
  Card,
  CardContainer,
  DescriptionText,
  IdText,
  Price,
  Wrap,
} from "./ListProduct.style";
import { changeInfo } from "../../redux/ProductSlice";
import { LANG } from "../../lang";
import { useTranslation } from "react-i18next";
import { UA } from "../../lang/ua";
import { GridWrap } from "../../common/grid/index.ts";
import { CardItem, CardList } from "../../data/product/frame/product-item.component.tsx";

export const ListProduct = ({ list }) => {
  const dispatch = useDispatch();
  return (
    // <CardContainer>
      <GridWrap column={3}>
        {list.map(({ name, id, description, price }) => (
          <CardItem
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
          />
        ))}
      </GridWrap>
    // </CardContainer>
  );
};

{
  /* <Card key={id}>
<h3>{name}</h3>
<DescriptionText>{description}</DescriptionText>
<IdText>{LANG.UA.LIST.CARD.ID} {id}</IdText>
<Wrap>
<Price>{price}$</Price>
<Btn onClick={()=>dispatch(changeInfo({id, name, price, description}))} to="/updateProduct">{LANG.UA.LIST.CARD.BUTTON.EDIT}</Btn>
</Wrap>

</Card> */
}
