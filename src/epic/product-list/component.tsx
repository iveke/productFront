import React from "react";
import { Text } from "../../common/text/index.ts";
import styled from "styled-components";
import { GridWrap } from "../../common/grid/index.ts";
import { CardItem } from "../../data/product/frame/product-item.component.tsx";
import { COLOR_DATA } from "../../theme/color.ts";
import { FONT_SIZE_DATA } from "../../theme/size.ts";
export const Component: React.FC<{list: any}> = ({ list }) => {
  return (
    <div>
      <Text color={COLOR_DATA.blue} font={FONT_SIZE_DATA.header} weight="bold" >Список товарів</Text>
      <ListContainer>
        <GridWrap column={3}>
          {list.length > 0 &&
            list.map(({ id, name, price, description }) => (
              <CardItem
                key={id}
                id={id}
                name={name}
                price={price}
                description={description}
              />
            ))}
        </GridWrap>
      </ListContainer>
    </div>
  );
};

const ListContainer = styled.ul`
  margin: 0 auto;
  padding: 20px;
  width: 100vw;
`;
