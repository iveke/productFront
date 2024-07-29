import { NavLink, Outlet } from "react-router-dom";
import { Menu, PagesLink, StyleLink } from "./Layout.style";

export const Layout = () => {
  return (
    <>
      <Menu>
      <PagesLink>
          <StyleLink to="/createProduct">createProduct</StyleLink>
        </PagesLink>
        <PagesLink>
          <StyleLink to="/list">ProductList</StyleLink>
        </PagesLink>
      </Menu>

      <Outlet />
    </>
  );
};
