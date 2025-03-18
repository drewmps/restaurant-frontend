import Preloader from "./components/Preloader";
import AddStaff from "./pages/AddStaff";
import Categories from "./pages/Categories";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Preloader />

      {/* Navbar */}
      <header
        className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
        id="navbar"
      >
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          <img
            src="./image/burgerLogo.jpg"
            height={50}
            className="d-inline-block me-2"
            alt="BURGER"
          />
          Admin Panel
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-menu"
          aria-controls="sidebar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </header>
      {/* End Navbar */}

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
          {/* New Product Section */}
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="new-product-section"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">New Product / Update Product</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <form id="product-form">
                  <div className="mb-3">
                    <label htmlFor="product-name">
                      Name <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-name"
                      placeholder="Enter product name"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-category">
                      Category <span className="text-danger fw-bold">*</span>
                    </label>
                    <select
                      id="product-category"
                      className="form-select"
                      required=""
                    >
                      <option value="" selected="" disabled="">
                        -- Select Category --
                      </option>
                      <option value={1}>Furniture</option>
                      <option value={2}>Workspace</option>
                      <option value={3}>Storage</option>
                      <option value={4}>Textile</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-desc">
                      Description
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-desc"
                      placeholder="Enter product description"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="mb-3">
                        <label htmlFor="product-stock">
                          Stock <span className="text-danger fw-bold">*</span>
                        </label>
                        <input
                          type="number"
                          min={0}
                          className="form-control"
                          id="product-stock"
                          placeholder="Enter product stock"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="mb-3">
                        <label htmlFor="product-price">
                          Price <span className="text-danger fw-bold">*</span>
                        </label>
                        <input
                          type="number"
                          min={0}
                          className="form-control"
                          id="product-price"
                          placeholder="Enter product price"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-image">Image</label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-image"
                      placeholder="Enter product image url"
                      autoComplete="off"
                    />
                  </div>
                  <div className="row mt-5 mb-3">
                    <div className="col-6">
                      <a
                        className="btn btn-lg btn-light rounded-pill w-100 p-2"
                        href=""
                      >
                        Cancel
                      </a>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-lg btn-primary rounded-pill w-100 p-2"
                        type="submit"
                        href=""
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* End New Product Section */}

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
