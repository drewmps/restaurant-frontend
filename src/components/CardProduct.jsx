import { Link } from "react-router";
import NoImage from "../assets/no-image.jpg";
function CardProduct({ name, to, imgUrl }) {
  return (
    <>
      {/* card product */}
      <div className="card" style={{ width: "14rem" }}>
        <img
          src={imgUrl ? imgUrl : NoImage}
          className="card-img-top"
          alt="..."
          height={200}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ maxHeight: "25px", overflow: "hidden" }}
          >
            {name}
          </h5>

          <Link
            className="btn btn-primary"
            style={{
              display: "flex",
              width: "fit-content",
              alignItems: "center",
            }}
            to={to}
          >
            Detail
          </Link>
        </div>
      </div>
      {/* card product */}
    </>
  );
}
export default CardProduct;
