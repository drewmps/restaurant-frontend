import { useParams } from "react-router";
import { getBaseURL } from "../helpers/api";
import { useEffect, useState } from "react";
import { formatRupiah } from "../helpers/formatRupiah";
import axios from "axios";

function DetailProduct() {
  const { id } = useParams();
  const [cuisine, setCuisine] = useState();
  async function fetchData() {
    try {
      const response = await axios.get(
        `${getBaseURL()}/apis/pub/restaurant-app/cuisines/${id}`
      );
      setCuisine(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.statusCode,
        text: error.response.data.error,
      });
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* Detail Section Public */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">{cuisine ? cuisine.name : ""}</h1>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex flex-column flex-md-row gap-2">
            <div>
              <img
                src={`${cuisine ? cuisine.imgUrl : ""}`}
                style={{ width: 250, height: "100%" }}
                className="d-inline-block me-2"
                alt=""
              />
            </div>
            <div>
              {cuisine && (
                <>
                  <div className="mb-4">
                    <h4>Deskripsi</h4>
                    <div>{cuisine ? `${cuisine.description}` : ""}</div>
                  </div>

                  <div>
                    <h4>Harga</h4>
                    <div>{cuisine ? `${formatRupiah(cuisine.price)}` : ""}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* End Detail Section Public */}
    </>
  );
}
export default DetailProduct;
