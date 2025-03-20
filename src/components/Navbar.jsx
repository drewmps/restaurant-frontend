function Navbar({ children }) {
  return (
    <>
      {/* Navbar */}
      <header
        className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
        id="navbar"
      >
        {children}
      </header>
      {/* End Navbar */}
    </>
  );
}
export default Navbar;
