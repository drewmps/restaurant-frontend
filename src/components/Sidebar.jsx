import { Link } from "react-router";

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
              <Link className="nav-link" id="nav-product" to="/admin/dashboard">
                <span className="icon material-symbols-outlined me-2">
                  shopping_bag
                </span>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="nav-category"
                to="/admin/categories"
              >
                <span className="icon material-symbols-outlined me-2">
                  category
                </span>
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="nav-category">
                <span className="icon material-symbols-outlined me-2">
                  account_circle
                </span>
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Sidebar */}
    </>
  );
}
