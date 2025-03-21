import { useNavigate } from "react-router";
import FormProduct from "../components/FormProduct";
import { useState } from "react";
import axios from "axios";
import { getBaseURL } from "../helpers/api";

function CreateProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      description,
      price: +price,
      imgUrl,
      stock: +stock,
      categoryId: +selectedCategory,
    };
    try {
      const response = await axios.post(
        getBaseURL() + "/apis/restaurant-app/cuisines",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
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
          <h1 className="display-2">New Product</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <FormProduct
              handleSubmit={handleSubmit}
              name={name}
              selectedCategory={selectedCategory}
              description={description}
              stock={stock}
              price={price}
              imgUrl={imgUrl}
              setName={setName}
              setSelectedCategory={setSelectedCategory}
              setDescription={setDescription}
              setStock={setStock}
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
export default CreateProduct;
