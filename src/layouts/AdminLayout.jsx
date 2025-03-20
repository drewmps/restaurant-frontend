import { Navigate, Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import NavbarAdmin from "../components/NavbarAdmin";

export default function AdminLayout() {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    return (
      <>
        <NavbarAdmin />
        <section className="container-fluid" id="home-section">
          <div className="row">
            <Sidebar />
            <Outlet />
          </div>
        </section>
      </>
    );
  }
  return <Navigate to="/" />;
}
