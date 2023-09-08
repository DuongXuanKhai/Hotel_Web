import React, { useContext, useState } from "react";
import "./hotel.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
import { AuthContext } from "../../context/authContext";
import useFetch from "../../hooks/useFetch";
import NavBar from "../../Components/Navbar/NavBar";
import Banner from "../../Components/Banner/Banner";
import Reserve from "../../Components/Reserver/Reserver.jsx";
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { dates, options } = useContext(SearchContext);
  const [openModal, setOpenModal] = useState(false);
  console.log(dates);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <section>
      <NavBar />
      <Banner />
      {loading ? (
        "loading"
      ) : (
        <div className="tour-card">
          <div className="tour-card__content">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="tour-card__image"
                />
              </div>
            ))}
            <h2 className="tour-card__name">{data.name}</h2>
            <p className="tour-card__type">Loại: {data.type}</p>
            <p className="tour-card__city">Tỉnh/TP: {data.city}</p>
            <p className="tour-card__address">Địa chỉ: {data.address}</p>
            <p className="tour-card__distance">
              Cách trung tâm: {data.distance}/m
            </p>
            <h3 className="tour-card__title">{data.title}</h3>
            <p className="tour-card__description">{data.desc}</p>
            <div className="tour-card__rating">
              <span className="tour-card__rating-icon">Đánh giá</span> -
              <span className="tour-card__rating-value"> 4.5</span>
            </div>
            <p className="tour-card__price">Giá/1đêm: {data.cheapestPrice}$</p>
            <h2>
              <b>{days * data.cheapestPrice * options.room}$</b> ({days} đêm)
            </h2>
            <button className="btn" onClick={handleClick}>
              Đặt lịch ngay!
            </button>
          </div>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </section>
  );
};

export default Hotel;
