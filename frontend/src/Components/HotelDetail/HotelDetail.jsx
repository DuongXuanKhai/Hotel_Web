import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { CiLocationOn } from "react-icons/ci";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation, useParams } from "react-router-dom";

const HotelDetail = ({ item }) => {
  const { id } = useParams(); // Sử dụng useParams để lấy id từ URL
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title" data-aos="fade-right">
          Khách sạn nổi bật
        </h3>
      </div>
      <div className="secContent grid">
        {data && data.photos && data.photos.length > 0 && (
          <div className="singleDestination" data-aos="fade-up">
            <div className="imagesDiv">
              <img src={data.photos[0] || ""} alt="" />
            </div>
            <div className="cardInfo">
              <h4 className="descTitle">{data.name}</h4>
              <div className="continent flex">
                <CiLocationOn className="icon" />
                <span className="name">{data.city}</span> -
                <span className="name">{data.address}</span>
              </div>
              <div className="fees flex">
                <div className="grade">
                  <span>
                    {data.title}
                    <small> +1</small>
                  </span>
                </div>
                <div className="price">
                  <h5>{data.cheapestPrice}$/đêm</h5>
                </div>
              </div>
              <div className="desc">
                <p>{data.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelDetail;
