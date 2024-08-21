import React from "react";
import { Menu } from "../../../common/navigate-menu/index.ts";
import { GridWrap } from "../../../common/grid/index.ts";
import { Link } from "../../../common/navigate-link/index.ts";
import { Outlet } from "react-router-dom";
import { CREATE_PAGE_PATH } from "../../../page/product-create/index.ts";
import { LIST_PAGE_PATH } from "../../../page/product-list/index.ts";

export const Elem: React.FC = () => {
  return (
    <>
      <Menu>
        <GridWrap column={2}>
          <Link to={CREATE_PAGE_PATH}>Створити продук</Link>
          <Link to={LIST_PAGE_PATH}>Список продуктів</Link>
        </GridWrap>
      </Menu>
      <Outlet />
    </>
  );
};

export {Elem as Layout}
