import Navbar from "./Navbar";

export default function NavbarPublic() {
  return (
    <>
      {/* Navbar */}
      <Navbar>
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          <img
            src="./image/burgerLogo.jpg"
            height={50}
            className="d-inline-block me-2"
            alt="BURGER"
          />
          Public Panel
        </a>

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
            <a className="nav-link" href="" id="nav-logout">
              <span className="icon material-symbols-outlined me-2">login</span>
              Log in
            </a>
          </div>
        </div>
      </Navbar>
      {/* End Navbar */}
    </>
  );
}
