import React, { useEffect } from "react";
import "./main.scss";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import useFetch from "../../hooks/useFetch";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Main = ({ item }) => {
  const { data, loading, error } = useFetch("/hotels?featured=true");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title" data-aos="fade-right">
          Khách sạn nổi bật
        </h3>
      </div>
      <div className="secContent grid">
        {data.map((item) => {
          return (
            <div
              className="singleDestination"
              key={item._id}
              data-aos="fade-up"
            >
              <div className="imagesDiv">
                <img src={item.photos[0]} alt="" />
              </div>
              <div className="cardInfo">
                <h4 className="descTitle">{item.name}</h4>
                <div className="continent flex">
                  <CiLocationOn className="icon" />
                  <span className="name">{item.city}</span> -
                  <span className="name">{item.address}</span>
                </div>
                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.title}
                      <small> +1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{item.cheapestPrice}$/đêm</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{item.desc}</p>
                </div>
                <button className="btn flex">
                  <Link to={`/hotels/find/${item._id}`}>Xem thêm</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
