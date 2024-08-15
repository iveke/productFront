import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { i18n } from "../../lib/lang";
import { Menu } from "../../common/navigate-menu/index.ts";
import { Link } from "../../common/navigate-link/index.ts";
import { GridWrap } from "../../common/grid/index.ts";
import { LANG } from "../../lang/index.js";

export const Layout = () => {
  return (
    <>
      <Menu>
        <GridWrap column={2}>
          <Link to="createProduct">Створити продук</Link>
          <Link to="list">Список продуктів</Link>
        </GridWrap>
      </Menu>
      <Outlet />
    </>
  );
};
