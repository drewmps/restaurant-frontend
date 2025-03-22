import { useNavigate, useParams } from "react-router";
import FormProduct from "../components/FormProduct";
import axios from "axios";
import { getBaseURL } from "../helpers/api";
import { useEffect, useState } from "react";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  async function fetchCuisine() {
    try {
      const { data } = await axios.get(
        getBaseURL() + `/apis/restaurant-app/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setName(data.data.name);
      setSelectedCategory(data.data.categoryId);
      setDescription(data.data.description);
      setPrice(data.data.price);
      setImgUrl(data.data.imgUrl);
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

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      description,
      price: +price,
      imgUrl,
      categoryId: +selectedCategory,
    };
    try {
      const response = await axios.put(
        getBaseURL() + `/apis/restaurant-app/cuisines/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      navigate("/admin/dashboard");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.statusCode,
        text: error.response.data.error,
      });
    }
  }

  return (
    <>
      {/* New Product Section */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="new-product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Update Product</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <FormProduct
              handleSubmit={handleSubmit}
              name={name}
              selectedCategory={selectedCategory}
              description={description}
              price={price}
              imgUrl={imgUrl}
              setName={setName}
              setSelectedCategory={setSelectedCategory}
              setDescription={setDescription}
              setPrice={setPrice}
              setImgUrl={setImgUrl}
            />
          </div>
        </div>
      </section>
      {/* End New Product Section */}
    </>
  );
}
export default UpdateProduct;
