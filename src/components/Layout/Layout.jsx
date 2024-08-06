import { NavLink, Outlet } from "react-router-dom";
import { Menu, PagesLink, StyleLink } from "./Layout.style";
import LANG from "../../lang";

export const Layout = () => {
  return (
    <>
      <Menu>
      <PagesLink>
          <StyleLink to="/createProduct">{LANG.UA.MENU.PAGE.PRODUCT_CREATE}</StyleLink>
        </PagesLink>
        <PagesLink>
          <StyleLink to="/list">{LANG.UA.MENU.PAGE.PRODUCT_LIST}</StyleLink>
        </PagesLink>
      </Menu>

      <Outlet />
    </>
  );
};
