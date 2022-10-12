import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import ButtonAddEpisodeAdmin from "./ModalAddEpisode";
import AddEpisode from "../AddEpisode/AddEpisode";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useContext } from "react";
import { UserContext } from "../../context/context";

function AdminTVContentDetails() {
  const [modalShow, setModalShow] = React.useState(false);
  const [state, dispatch] = useContext(UserContext);

  function showModal() {
    setModalShow(true);
  }

  const handleBackMovies = () => {
    Navigate("/addlistpage");
  };

  let Navigate = useNavigate();
  let { id } = useParams();
  // id = id.toString();
  let { data: films } = useQuery("filmCache", async () => {
    const response = await API.get("/film/" + id);
    // console.log(response);
    return response.data.data;
  });

  console.log("ini data film tv" + films);

  return (
    <div className="container">
      <div class="ratio ratio-16x9 trailer_movies mb-3 ">
        <iframe
          src={films?.linkfilm}
          title={films?.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {/* <div className="row">
       
      </div> */}

      <div className="row">
        <div className="col mb-3">
          <img
            className="img"
            src={films?.thumbnailfilm}
            alt="default.img"
            style={{ width: "300px", height: "300px" }}
          />
        </div>

        <div className="col">
          <h2>{films?.title}</h2>
          <div>
            <span className="me-3 fw-lighter">{films?.year}</span>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => Navigate("/addlistpage")}
            >
              {films?.category?.name}
            </button>
          </div>
          <p className="detail_desc">{films?.description}</p>
        </div>

        <div className="col">
          <div className="mb-4 me-4 pe-3 text-end">
            <button className="btn btn-danger" onClick={showModal}>
              Add Episode
            </button>
            <AddEpisode show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Episode 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Episode 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Episode 3</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default AdminTVContentDetails;
