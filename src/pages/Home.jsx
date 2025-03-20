import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { getBaseURL } from "../helpers/api";
import axios from "axios";

export default function Home() {
  const [cuisines, setCuisines] = useState([]);
  const [search, setSearch] = useState("");
  async function fetchCuisines() {
    const url = new URL(getBaseURL() + "/apis/pub/restaurant-app/cuisines");
    if (search) {
      url.searchParams.append("q", search);
    }
    try {
      const response = await axios.get(url);
      setCuisines(response.data.data.query);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.statusCode,
        text: error.response.data.error,
      });
    }
  }
  useEffect(() => {
    fetchCuisines();
  }, [search]);
  return (
    <>
      {/* Product Section Public */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Products Public</h1>
        </div>
        {/* filter search sort */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card mb-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <form className="d-flex mb-3" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </form>
                <div>
                  <div>Filter by categories</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Category 1
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Category 2
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Category 3
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Category 4
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Category 5
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "18rem" }}>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Sort</option>
                <option value={1}>Newest</option>
                <option value={2}>Oldest</option>
              </select>
            </div>
          </div>
        </div>
        {/* filter search sort */}
        {/* card product */}
        <div className="row mb-3">
          <div className="col-12 d-flex gap-2 flex-wrap row-gap-2">
            {cuisines.map((cuisine) => {
              return (
                <CardProduct
                  imgUrl={cuisine.imgUrl}
                  name={cuisine.name}
                  to={`/cuisines/${cuisine.id}`}
                />
              );
            })}
          </div>
        </div>
        {/* card product */}
        {/* pagination */}
        <nav
          className="d-flex justify-content-center"
          aria-label="Page navigation example"
        >
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                aria-label="Previous"
                style={{ color: "#0058a3" }}
              >
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" style={{ color: "#0058a3" }} href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" style={{ color: "#0058a3" }} href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" style={{ color: "#0058a3" }} href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                style={{ color: "#0058a3" }}
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* pagination */}
      </section>
      {/* End Product Section Public */}
    </>
  );
}
