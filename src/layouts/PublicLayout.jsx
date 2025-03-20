import { Outlet } from "react-router";

import NavbarPublic from "../components/NavbarPublic";

export default function PublicLayout() {
  return (
    <>
      <NavbarPublic />
      <section className="container-fluid" id="home-section">
        <div className="row">
          <Outlet />
        </div>
      </section>
    </>
  );
}
