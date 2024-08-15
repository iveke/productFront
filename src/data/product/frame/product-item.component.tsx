import React from "react";
import { GridWrap } from "../../../common/grid/index.ts";
import { Card } from "../../../common/list-card/index.ts";
import { Text } from "../../../common/text/index.ts";
import { LANG } from "../../../lang/index.js";
import { Button } from "../../../common/button/index.ts";
import { useDispatch } from "react-redux";
import { changeInfo } from "../../../redux/ProductSlice.js";
import { Link } from "../../../common/navigate-link/index.ts";

const Elem: React.FC<{name: string, price: number, description?: string | null, id: string, key: string}> = ({name, price, description, id}) => {
    const dispatch = useDispatch()
    console.log(name, price)
  return (

      <Card key={id}>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{LANG.UA.LIST.CARD.ID} {id}</Text>
        <GridWrap>
            <Text weight="bold">{price}$</Text>
            <Link to="/updateProduct" onClick={()=>dispatch(changeInfo({id, name, price, description}))}>Редагувати</Link>
        </GridWrap>
      </Card>
  );
};

export { Elem as CardItem };
