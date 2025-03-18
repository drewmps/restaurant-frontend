import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* Preloader */}
      <div id="preloader" style={{ display: "none" }}>
        <div className="loading">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_remmdtqv.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
        </div>
      </div>
      {/* End Preloader */}
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
      {/* Login Section */}
      <section className="container" id="login-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5">Login</h1>
          </div>
          <div className="col-12 col-lg-8 offset-lg-2 my-5">
            <div className="row">
              <div className="col-12 col-md-6 border-end p-5 text-left">
                <img
                  src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/561/1056141_PE848273_S4.webp"
                  width="350px"
                  alt="sofa"
                />
              </div>
              <div className="col-12 col-md-6 p-5 text-left">
                <div className="form-signin m-auto">
                  <form id="login-form">
                    <h1 className="h3 mb-3 display-1">
                      Log in to your account
                    </h1>
                    <span>Please enter your email and password</span>
                    <div className="mb-3 mt-3">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="login-email">Email</label>
                        <label className="text-danger text-end fw-bold">
                          *
                        </label>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="login-email"
                        placeholder="Enter email address ..."
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="login-password">Password</label>
                        <label className="text-danger text-end fw-bold">
                          *
                        </label>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="login-password"
                        placeholder="Enter your password ..."
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <button
                      className="btn btn-lg btn-primary rounded-pill w-100 p-2"
                      type="submit"
                    >
                      Log In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Login Section */}
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

          {/* Detail Section Public */}
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="product-section"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">Detail Products Public</h1>
            </div>
            <div className="row mb-3">
              <div className="col-12 d-flex flex-column flex-md-row gap-2">
                <div>
                  <img
                    src="./image/burgerLogo.jpg"
                    height="400px"
                    className="d-inline-block me-2"
                    alt="BURGER"
                  />
                </div>
                <div>
                  <div>Ini buat detail page</div>
                  <div>Ini buat detail page</div>
                  <div>Ini buat detail page</div>
                  <div>Ini buat detail page</div>
                </div>
              </div>
            </div>
          </section>
          {/* End Detail Section Public */}
          {/* Product Section */}
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="product-section"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">Products</h1>
              <button className="btn btn-primary rounded-pill" id="new-product">
                <span className="icon material-symbols-outlined">add</span>New
                Product
              </button>
            </div>
            <div className="row">
              <div className="col-12 table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col" width="180px">
                        Image
                      </th>
                      <th scope="col" width="250px">
                        Description
                      </th>
                      <th scope="col">Stock</th>
                      <th scope="col">Price</th>
                      <th scope="col">Author</th>
                      <th scope="col" width="50px" />
                    </tr>
                  </thead>
                  <tbody id="table-product">
                    <tr>
                      <td scope="row">#1</td>
                      <td className="fw-bold">MILLBERGET</td>
                      <td>
                        <img
                          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/201/1020142_PE831799_S4.jpg"
                          className="img-fluid"
                        />
                      </td>
                      <td>Swivel chair, murum black</td>
                      <td>13</td>
                      <td className="fw-bold">Rp1.599.000</td>
                      <td>admin@mail.com</td>
                      <td>
                        <span className="d-flex">
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              delete
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              edit
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              image
                            </span>
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">#2</td>
                      <td className="fw-bold">MICKE</td>
                      <td>
                        <img
                          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/359/0735981_PE740299_S4.jpg"
                          className="img-fluid"
                        />
                      </td>
                      <td>Desk, black-brown, 105x50 cm</td>
                      <td>30</td>
                      <td className="fw-bold">Rp1.799.000</td>
                      <td>admin@mail.com</td>
                      <td>
                        <span className="d-flex">
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              delete
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              edit
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              image
                            </span>
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">#3</td>
                      <td className="fw-bold">ALEX</td>
                      <td>
                        <img
                          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/777/0977775_PE813763_S3.jpg"
                          className="img-fluid"
                        />
                      </td>
                      <td>drawer unit, white, 36x70 cm</td>
                      <td>12</td>
                      <td className="fw-bold">Rp1.370.000</td>
                      <td>admin@mail.com</td>
                      <td>
                        <span className="d-flex">
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              delete
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              edit
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              image
                            </span>
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">#4</td>
                      <td className="fw-bold">SOCKERBIT</td>
                      <td>
                        <img
                          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/290/1029026_PE835627_S3.jpg"
                          className="img-fluid"
                        />
                      </td>
                      <td>Storage box with lid, grey-green, 19x26x15 cm</td>
                      <td>42</td>
                      <td className="fw-bold">Rp59.900</td>
                      <td>admin@mail.com</td>
                      <td>
                        <span className="d-flex">
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              delete
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              edit
                            </span>
                          </a>
                          <a href="" className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              image
                            </span>
                          </a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* End Product Section */}
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
          {/* Category Section */}
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="category-section"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">Categories</h1>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                    </tr>
                  </thead>
                  <tbody id="table-category">
                    <tr>
                      <td scope="row">#1</td>
                      <td className="fw-bold">Furniture</td>
                    </tr>
                    <tr>
                      <td scope="row">#2</td>
                      <td className="fw-bold">Workspace</td>
                    </tr>
                    <tr>
                      <td scope="row">#3</td>
                      <td className="fw-bold">Storage</td>
                    </tr>
                    <tr>
                      <td scope="row">#4</td>
                      <td className="fw-bold">Textile</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* End Category Section */}
          {/* New User Section */}
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="new-user-section"
          >
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="pt-3 pb-2 mb-3 border-bottom">
                  <form id="register-form">
                    <h1 className="h3 mb-3 display-1">Register User</h1>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="register-username">Username</label>
                        <label className="text-danger text-end fw-bold">
                          *
                        </label>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="register-username"
                        placeholder="Enter username ..."
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="register-email">Email</label>
                        <label className="text-danger text-end fw-bold">
                          *
                        </label>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        placeholder="Enter email address ..."
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="register-password">Password</label>
                        <label className="text-danger text-end fw-bold">
                          *
                        </label>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password"
                        placeholder="Enter password ..."
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="register-phone">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="register-phone"
                        placeholder="Enter phone number (optional) ..."
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="register-address">Address</label>
                      <textarea
                        id="register-address"
                        className="form-control"
                        rows={3}
                        placeholder="Enter address (optional) ..."
                        autoComplete="off"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* End New User Section */}
        </div>
      </section>
      {/* End Home Section */}
    </>
  );
}

export default App;
