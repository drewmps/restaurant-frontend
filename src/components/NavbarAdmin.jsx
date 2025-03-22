import { Link, useNavigate } from "react-router";
import Navbar from "./Navbar";
import logo from "../assets/BOOMER__2_-removebg-preview_1.png";

export default function NavbarAdmin() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("access_token");
    navigate("/");
  }
  return (
    <>
      {/* Navbar */}
      <Navbar>
        <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          <img
            src={logo}
            height={50}
            className="d-inline-block me-2"
            alt="BURGER"
          />
        </Link>
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
            <button className="nav-link" id="nav-logout" onClick={handleLogout}>
              <span className="icon material-symbols-outlined me-2">
                logout
              </span>
              Log out
            </button>
          </div>
        </div>
      </Navbar>
      {/* End Navbar */}
    </>
  );
}
