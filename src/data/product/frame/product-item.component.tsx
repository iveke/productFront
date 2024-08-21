import React from "react";
import { GridWrap } from "../../../common/grid/index.ts";
import { Card } from "../../../common/list-card/index.ts";
import { Text } from "../../../common/text/index.ts";
import { LANG } from "../../../lang/index.js";
import { Button } from "../../../common/button/index.ts";
import { useDispatch } from "react-redux";
import { changeInfo } from "../../../redux/ProductSlice.js";
import { Link } from "../../../common/navigate-link/index.ts";
import { COLOR_DATA } from "../../../theme/color.ts";
import { FlexWrap } from "../../../common/flex/index.ts";
import { UPDATE_PAGE_PATH } from "../../../page/product-update/index.ts";

const Elem: React.FC<{
  name: string;
  price: number;
  description?: string | null;
  id: string;
  key: string;
}> = ({ name, price, description, id }) => {
  const dispatch = useDispatch();
  return (
    <Card key={id}>
      <FlexWrap gap={5}>
        <Text color={COLOR_DATA.black}>{name}</Text>
        <Text color={COLOR_DATA.black}>{description}</Text>
        <Text color={COLOR_DATA.id}>
          {LANG.UA.LIST.CARD.ID} {id}
        </Text>
        <GridWrap column={2}>
          <Text color={COLOR_DATA.black} weight="bold">
            {price}$
          </Text>
          <Link
            to={UPDATE_PAGE_PATH}
            color={COLOR_DATA.blue}
            onClick={() =>
              dispatch(changeInfo({ id, name, price, description }))
            }
          >
            Редагувати
          </Link>
        </GridWrap>
      </FlexWrap>
    </Card>
  );
};

export { Elem as CardItem };
