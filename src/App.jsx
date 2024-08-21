import { Route, Routes } from "react-router-dom";
import { BoundingRoute } from "./components/BoundingRoute/BoundingRoute";
import { CREATE_PAGE_PATH, CreatePage } from "./page/product-create/index.ts";
import { LIST_PAGE_PATH, ListPage } from "./page/product-list/index.ts";
import { UPDATE_PAGE_PATH, UpdatePage } from "./page/product-update/index.ts";
import { HomePage } from "./page/home/index.ts";
import { Layout } from "./data/menu/frame/menu-layout.component.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={CREATE_PAGE_PATH} element={<CreatePage />} />
          <Route path={LIST_PAGE_PATH} element={<ListPage />} />
          <Route
            path={UPDATE_PAGE_PATH}
            element={
              <BoundingRoute redirect={LIST_PAGE_PATH} component={UpdatePage} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
