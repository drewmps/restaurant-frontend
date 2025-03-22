import axios from "axios";
import Button from "../components/Button";
import { getBaseURL } from "../helpers/api";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";

export default function UpdateImage() {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.patch(
        getBaseURL() + `/apis/restaurant-app/cuisines/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("🚀 ~ handleSubmit image ~ error:", error);
      Swal.fire({
        icon: "error",
        title: error.response.data.statusCode,
        text: error.response.data.error,
      });
    }
  };
  return (
    <>
      {/* Update Section */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="update-product-section"
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="pt-3 pb-2 mb-3">
              <form id="register-form" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 display-1">Update Image</h1>
                {/* <div class="mb-3"> */}
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control pb-2"
                    id="inputGroupFile02"
                    autoComplete="off"
                    required=""
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <Button
                  className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                  type="submit"
                >
                  Update Image
                </Button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Update Section */}
    </>
  );
}
