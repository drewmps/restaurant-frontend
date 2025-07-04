import axios from "axios";
import { Link } from "react-router";
import { getBaseURL } from "../helpers/api";
import { useEffect, useState } from "react";
import { formatRupiah } from "../helpers/formatRupiah";
import NoImage from "../assets/no-image.jpg";

function Products() {
  const [cuisines, setCuisines] = useState([]);
  async function fetchCuisine() {
    try {
      const response = await axios.get(
        getBaseURL() + "/apis/restaurant-app/cuisines",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setCuisines(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.statusCode,
        text: error.response.data.error,
      });
    }
  }

  async function deleteCuisine(cuisineId) {
    try {
      await axios.delete(
        getBaseURL() + `/apis/restaurant-app/cuisines/${cuisineId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setCuisines(
        cuisines.filter((cuisine) => {
          return cuisine.id !== cuisineId;
        })
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.statusCode,
        text: error.response.data.error,
      });
    }
  }
  useEffect(() => {
    fetchCuisine();
  }, []);
  return (
    <>
      {/* Product Section */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Products</h1>
          <Link to="/admin/create">
            <button className="btn btn-primary rounded-pill" id="new-product">
              <span className="icon material-symbols-outlined">add</span>New
              Product
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12 table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col" width="180px">
                    Image
                  </th>
                  <th scope="col" width="250px">
                    Description
                  </th>
                  <th scope="col">Price</th>
                  <th scope="col">Author</th>
                  <th scope="col" width="50px" />
                </tr>
              </thead>
              <tbody id="table-product">
                {cuisines.map((cuisine, index) => {
                  return (
                    <tr key={cuisine.id}>
                      <td scope="row">#{index + 1}</td>
                      <td className="fw-bold">{cuisine.name}</td>
                      <td>
                        <img
                          src={cuisine.imgUrl ? cuisine.imgUrl : NoImage}
                          height={150}
                          width={200}
                          style={{ objectFit: "cover" }}
                        />
                      </td>
                      <td>
                        <div
                          style={{
                            height: "160px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {cuisine.description}
                        </div>
                      </td>

                      <td className="fw-bold">{formatRupiah(cuisine.price)}</td>
                      <td>{cuisine.User.username}</td>
                      <td>
                        <span className="d-flex">
                          <div
                            className="ms-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              deleteCuisine(cuisine.id);
                            }}
                          >
                            <span className="icon material-symbols-outlined text-danger">
                              delete
                            </span>
                          </div>
                          <Link
                            to={`/admin/update/${cuisine.id}`}
                            className="ms-3"
                          >
                            <span className="icon material-symbols-outlined text-danger">
                              edit
                            </span>
                          </Link>
                          <Link
                            to={`/admin/update-image/${cuisine.id}`}
                            className="ms-3"
                          >
                            <span className="icon material-symbols-outlined text-danger">
                              image
                            </span>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* End Product Section */}
    </>
  );
}
export default Products;
