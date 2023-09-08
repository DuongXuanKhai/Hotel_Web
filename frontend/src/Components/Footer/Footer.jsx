import React, { useEffect } from "react";
import "./footer.scss";
import video2 from "../../assets/video2.mp4";
import { VscSend } from "react-icons/vsc";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiArrowRight,
} from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv">
          <div className="text" data-aos="fade-up">
            <small>Keep in touch</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              type="text"
              placeholder="Enter Email Address"
              data-aos="fade-up"
            />
            <button className="btn flex" type="submit" data-aos="fade-up">
              Send
              <VscSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex" data-aos="fade-up">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, facere necessitatibus, neque quibusdam adipisci sunt
              fugit expedita obcaecati perferendis rerum dolore corporis
              excepturi possimus iusto mollitia quidem illo. Facilis, omnis.
            </div>
            <div className="footerSocial flex">
              <FiFacebook className="icon" />
              <FiYoutube className="icon" />
              <FiInstagram className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* one */}

            <div className="linkGroup">
              <span className="groupTitle">Our agency</span>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Dịch vụ
              </li>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Liên hệ
              </li>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Tuyển dụng
              </li>
            </div>
            {/* two */}
            <div className="linkGroup">
              <span className="groupTitle">Our agency</span>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Dịch vụ
              </li>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Liên hệ
              </li>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Tuyển dụng
              </li>
            </div>
            {/* three */}
            <div className="linkGroup">
              <span className="groupTitle">Our agency</span>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Dịch vụ
              </li>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Liên hệ
              </li>
              <li className="footerList flex">
                <FiArrowRight className="icon" />
                Tuyển dụng
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>Best Travel in the world</small>
            <small>CopyRights Klook - 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
