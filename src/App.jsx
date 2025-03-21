import { BrowserRouter, Route, Routes } from "react-router";
import DetailProduct from "./pages/DetailProduct";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginLayout from "./layouts/LoginLayout";
import AdminLayout from "./layouts/AdminLayout";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import AddStaff from "./pages/AddStaff";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="cuisines/:id" element={<DetailProduct />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="dashboard" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path="create-user" element={<AddStaff />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
