import React, { useEffect } from "react";
import "./banner.scss";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { MdOutlineTour } from "react-icons/md";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import SearchBar from "../SearchBar/SearchBar";
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText" data-aos="fade-up">
            THẾ GIỚI TRỌN NIỀM VUI
          </span>
          <h1 className="homeTitle" data-aos="fade-up">
            Tìm kiếm những cuộc phiêu lưu
          </h1>
        </div>
        <SearchBar />
      </div>
    </section>
  );
};

export default Banner;
