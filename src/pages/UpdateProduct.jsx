import FormProduct from "../components/FormProduct";

function UpdateProduct() {
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
            <FormProduct />
          </div>
        </div>
      </section>
      {/* End New Product Section */}
    </>
  );
}
export default UpdateProduct;
