export default function Sidebar() {
  return (
    <>
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
        </div>
      </nav>
      {/* End Sidebar */}
    </>
  );
}
