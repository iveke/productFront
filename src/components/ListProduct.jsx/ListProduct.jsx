import { useDispatch } from "react-redux";
import { Btn, Card, CardContainer, DescriptionText, IdText, Price, Wrap } from "./ListProduct.style";
import { changeInfo } from "../../redux/ProductSlice";

export const ListProduct = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      {list.map(({ name, price, description, id }) => (
        <Card key={id}>
          <h3>{name}</h3>
          <DescriptionText>{description}</DescriptionText>
          <IdText>ID: {id}</IdText>
          <Wrap>
          <Price>{price}$</Price>
          <Btn onClick={()=>dispatch(changeInfo({id, name, price, description}))} to="/updateProduct">Редагувати</Btn>
          </Wrap>

        </Card>
      ))}
    </CardContainer>
  );
};
