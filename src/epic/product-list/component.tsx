import React from "react";
import styled from "styled-components";
import { GridWrap } from "../../common/grid/index.ts";
import { CardItem } from "../../data/product/frame/product-item.component.tsx";
import { ComponentProps } from "./constant.ts";
export const Component: React.FC<ComponentProps> = ({
  list,
  isLoading,
  isError,
}) => {
  return (
    <>
      {isLoading && <h3> Loading...</h3>}
      {isError && <h3>Sorry you have Error</h3>}
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
    </>
  );
};

const ListContainer = styled.ul`
  margin: 0 auto;
  padding: 20px;
`;
