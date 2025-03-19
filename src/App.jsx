import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Sidebar from "./components/Sidebar";
import AddStaff from "./pages/AddStaff";
import Categories from "./pages/Categories";
import CreateProduct from "./pages/CreateProduct";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import UpdateImage from "./pages/UpdateImage";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <>
      <Preloader />

      <Navbar />

      <Login />

      {/* Home Section */}
      <section className="container-fluid" id="home-section">
        <div className="row">
          <Sidebar />

          <Home />

          <DetailProduct />

          <Products />

          <CreateProduct />

          <UpdateProduct />

          <UpdateImage />

          <Categories />

          <AddStaff />
        </div>
      </section>
      {/* End Home Section */}
    </>
  );
}

export default App;
