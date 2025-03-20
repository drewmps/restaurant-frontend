import { Link, useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function NavbarPublic({ setIsLoggedIn }) {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    navigate("/");
  }
  return (
    <>
      {/* Navbar */}
      <Navbar>
        <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          <img
            src="./image/burgerLogo.jpg"
            height={50}
            className="d-inline-block me-2"
            alt="BURGER"
          />
          Public Panel
        </Link>

        <div>
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
          <div className="px-5">
            {access_token ? (
              <button
                className="nav-link"
                id="nav-logout"
                onClick={handleLogout}
              >
                <span className="icon material-symbols-outlined me-2">
                  logout
                </span>
                Log out
              </button>
            ) : (
              <Link className="nav-link" id="nav-logout" to="/login">
                <span className="icon material-symbols-outlined me-2">
                  login
                </span>
                Log in
              </Link>
            )}
          </div>
        </div>
      </Navbar>
      {/* End Navbar */}
    </>
  );
}
