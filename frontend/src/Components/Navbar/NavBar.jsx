import React, { useContext, useRef, useState } from "react";
import "./navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { FaHotel } from "react-icons/fa";
const NavBar = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const closeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1 className="">
              <FaHotel className="icon" />
              Hotel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            {user ? (
              <>
                <h5 className="mb-0">{user.username}</h5>
                <button className="btn btn-dark" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn ">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn ">
                  <Link to="/register">Register</Link>
                </button>
              </>
            )}
          </ul>
          <div className="closeNavbar" onClick={closeNav}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div className="toggleNavbar" onClick={showNav}>
          <BsThreeDotsVertical className="icon" />
        </div>
      </header>
    </section>
  );
};

export default NavBar;
