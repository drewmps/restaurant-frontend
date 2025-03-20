import { useEffect, useState } from "react";
import { getBaseURL } from "../helpers/api";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);
  async function fetchCategories() {
    try {
      const response = await axios.get(
        getBaseURL() + "/apis/restaurant-app/categories",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

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
      {/* Category Section */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="category-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Categories</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody id="table-category">
                {categories.map((category, index) => {
                  return (
                    <tr key={category.id}>
                      <td scope="row">#{index + 1}</td>
                      <td className="fw-bold">{category.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* End Category Section */}
    </>
  );
}
export default Categories;
