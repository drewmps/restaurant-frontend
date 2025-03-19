import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import AddStaff from "./pages/AddStaff";
import Categories from "./pages/Categories";
import CreateProduct from "./pages/CreateProduct";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
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
          {/* Sidebar */}
          <nav
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            id="sidebar-menu"
          >
            <div className="position-sticky pt-5">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-product">
                    <span className="icon material-symbols-outlined me-2">
                      shopping_bag
                    </span>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-category">
                    <span className="icon material-symbols-outlined me-2">
                      category
                    </span>
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-category">
                    <span className="icon material-symbols-outlined me-2">
                      account_circle
                    </span>
                    Add User
                  </a>
                </li>
              </ul>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Account</span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link">
                    <span className="icon material-symbols-outlined me-2">
                      person
                    </span>
                    Hej, <span id="username">Hacktiv8!</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-logout">
                    <span className="icon material-symbols-outlined me-2">
                      logout
                    </span>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* End Sidebar */}

          <Home />

          <DetailProduct />

          <Products />

          <CreateProduct />

          <UpdateProduct />

          {/* Update Section */}
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="update-product-section"
          >
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="pt-3 pb-2 mb-3">
                  <form id="register-form">
                    <h1 className="h3 mb-3 display-1">Update Image</h1>
                    {/* <div class="mb-3"> */}
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control pb-2"
                        id="inputGroupFile02"
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <button
                      className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                      type="submit"
                    >
                      Update Image
                    </button>
                    {/* </div> */}
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* End Update Section */}

          <Categories />

          <AddStaff />
        </div>
      </section>
      {/* End Home Section */}
    </>
  );
}

export default App;
