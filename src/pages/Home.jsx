import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { getBaseURL } from "../helpers/api";
import axios from "axios";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("DESC");
  const [page, setPage] = useState(1);

  const [cuisines, setCuisines] = useState({
    query: [],
    pagination: {
      currentPage: 1,
      totalPage: 1,
      totalRows: 1,
    },
  });
  const [categories, setCategories] = useState([]);
  async function fetchCuisines() {
    const url = new URL(getBaseURL() + "/apis/pub/restaurant-app/cuisines");
    if (search) {
      url.searchParams.append("q", search);
    }
    if (selectedCategory) {
      url.searchParams.append("i", selectedCategory);
    }
    url.searchParams.append("sort", sort);
    url.searchParams.append("page", page.toString());

    try {
      const response = await axios.get(url);
      setCuisines(response.data.data);
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
  }, [search, sort, selectedCategory, page]);

  async function fetchCategories() {
    const url = new URL(getBaseURL() + "/apis/pub/restaurant-app/categories");
    try {
      const response = await axios.get(url);
      setCategories(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.statusCode,
        text: error.response.data.error,
      });
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      {/* Product Section Public */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Cuisines</h1>
        </div>
        {/* filter search sort */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex gap-4">
              <form className="d-flex w-25" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </form>
              <select
                className="form-select w-25"
                aria-label="Default select example"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
              >
                <option value="">Category</option>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
              <select
                className="form-select w-25"
                aria-label="Default select example"
                onChange={(e) => {
                  setSort(e.target.value);
                }}
              >
                <option value="DESC">Newest</option>
                <option value="ASC">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        {/* filter search sort */}
        {/* card product */}
        <div className="row mb-3">
          <div className="col-12 d-flex gap-2 flex-wrap row-gap-2">
            {cuisines.query?.map((cuisine) => {
              return (
                <CardProduct
                  key={cuisine.id}
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
              <button
                className="page-link"
                style={
                  page === 1
                    ? {
                        color: "#666666",
                        backgroundColor: "#cccccc",
                        cursor: "not-allowed",
                      }
                    : { color: "#0058a3" }
                }
                disabled={page === 1 ? true : false}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                <span aria-hidden="true">«</span>
              </button>
            </li>

            <li className="page-item">
              <button
                className="page-link"
                style={
                  page === cuisines.pagination?.totalPage
                    ? {
                        color: "#666666",
                        backgroundColor: "#cccccc",
                        cursor: "not-allowed",
                      }
                    : { color: "#0058a3" }
                }
                disabled={
                  page === cuisines.pagination?.totalPage ? true : false
                }
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <span aria-hidden="true">»</span>
              </button>
            </li>
          </ul>
        </nav>
        {/* pagination */}
      </section>
      {/* End Product Section Public */}
    </>
  );
}
