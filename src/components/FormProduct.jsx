import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { getBaseURL } from "../helpers/api";
import { Link } from "react-router";

function FormProduct({
  handleSubmit,
  name,
  selectedCategory,
  description,
  price,
  imgUrl,
  setName,
  setSelectedCategory,
  setDescription,
  setPrice,
  setImgUrl,
}) {
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
      <form id="product-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="product-name">
            Name <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="product-name"
            placeholder="Enter product name"
            autoComplete="off"
            required=""
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-category">
            Category <span className="text-danger fw-bold">*</span>
          </label>
          <select
            id="product-category"
            className="form-select"
            required=""
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            <option value="" disabled="">
              -- Select Category --
            </option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="product-desc">
            Description
            <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="product-desc"
            placeholder="Enter product description"
            autoComplete="off"
            required=""
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-price">
            Price <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="number"
            min={0}
            className="form-control"
            id="product-price"
            placeholder="Enter product price"
            autoComplete="off"
            required=""
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-image">Image</label>
          <input
            type="text"
            className="form-control"
            id="product-image"
            placeholder="Enter product image url"
            autoComplete="off"
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          />
        </div>
        <div className="row mt-5 mb-3">
          <div className="col-6">
            <Link
              to="/admin/dashboard"
              className="btn btn-lg btn-light rounded-pill w-100 p-2"
            >
              Cancel
            </Link>
          </div>
          <div className="col-6">
            <Button
              className="btn btn-lg btn-primary rounded-pill w-100 p-2"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
export default FormProduct;
