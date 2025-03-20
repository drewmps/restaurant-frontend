import { Outlet } from "react-router";

import NavbarPublic from "../components/NavbarPublic";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

export default function PublicLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <NavbarPublic setIsLoggedIn={setIsLoggedIn} />
      <section className="container-fluid" id="home-section">
        <div className="row">
          {isLoggedIn ? <Sidebar /> : <></>}
          <Outlet />
        </div>
      </section>
    </>
  );
}
