import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
  MDBIcon,
  MDBCheckbox,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { Button } from "react-bootstrap";
import { createProject } from "../../redux/products/productSlice";
const initialState = {
  title: "",
  category: "",
  creator: "",
};
function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [imgToRemove, setImgToRemove] = useState(null);

  const [images, setImages] = useState([]);
  function handleRemoveImg(imgObj) {
    setImgToRemove(imgObj.public_id);
    axios
      .delete(`/images/${imgObj.public_id}/`)
      .then((res) => {
        setImgToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

  const [form, setForm] = useState(initialState);
  console.log("form", form);

  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "pitz",
        uploadPreset: "peter-main",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    widget.open();
  }
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      images,
    }));
  }, [images]);
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      creator: currentUser._id,
    }));
  }, [images]);
  // console.log("img", images);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      dispatch(createProject({ ...form, toast }));
      console.log(form);
    }
  };

  return (
    <MDBContainer style={{ width: "100%" }} fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Add content
              </p>
<form onSubmit={handleSubmit} action="">
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="title"
                  id="form1"
                  type="text"
                  className="w-100"
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <select
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                style={{ marginBottom: "3rem" }}
                name="select category"
                id=""
              >
                <option value="">category</option>
                <option value="movies">movies</option>
                <option value="shows">shows</option>v{" "}
                <option value="podicats">podicats</option>
                <option value="kids">kids</option>
              </select>
              <MDBBtn className="mb-4" size="lg">
                Submit
              </MDBBtn>
              <label htmlFor="video">
                Upload your Files either video audio or a show
              </label>

              <form required className="mb-3">
                <Button
                  style={{
                    width: "100%",
                    color: "black",
                    textAlign: "center",
                    background: "purple",
                  }}
                  type="button"
                  onClick={showWidget}
                >
                  Upload Images
                </Button>

                <div className="images-preview-container">
                  {images.map((image) => (
                    <div className="image-preview">
                      <img width={200} src={image.url} />
                      {imgToRemove != image.public_id && (
                        <i
                          className="fa fa-times-circle"
                          onClick={() => handleRemoveImg(image)}
                        ></i>
                      )}
                    </div>
                  ))}
                </div>
              </form></form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
