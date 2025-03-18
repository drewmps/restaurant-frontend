function DetailProduct() {
  return (
    <>
      {/* Detail Section Public */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Detail Products Public</h1>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex flex-column flex-md-row gap-2">
            <div>
              <img
                src="./image/burgerLogo.jpg"
                height="400px"
                className="d-inline-block me-2"
                alt="BURGER"
              />
            </div>
            <div>
              <div>Ini buat detail page</div>
              <div>Ini buat detail page</div>
              <div>Ini buat detail page</div>
              <div>Ini buat detail page</div>
            </div>
          </div>
        </div>
      </section>
      {/* End Detail Section Public */}
    </>
  );
}
export default DetailProduct;
