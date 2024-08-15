import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { i18n } from "../../lib/lang";
import LANG from "../../lang";
import { Menu } from "../../common/navigate-menu/index.ts";
import { Link } from "../../common/navigate-link/index.ts";

export const Layout = () => {
  return (
    <>
      <Menu>
        <Link path="createProduct">Create</Link>
        <Link path="list">List</Link>
      </Menu>
      <Outlet />
    </>
  );
};
