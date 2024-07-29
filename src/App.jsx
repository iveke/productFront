import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ProductList } from "./components/ProductList/ProductList";
import {CreateProductPage} from "./pages/CreateProductPage";
import { ProductListPage } from "./pages/ProductListPage";
import { UpdateProductPage } from "./pages/UpdateProductPage";
import { BoundingRoute } from "./components/BoundingRoute/BoundingRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="createProduct" element={<CreateProductPage/>}/>
          <Route path="list" element={<ProductListPage />}/>
          <Route path="updateProduct" element={<BoundingRoute redirect="/list" component={UpdateProductPage} />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
