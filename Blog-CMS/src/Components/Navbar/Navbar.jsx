import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.jpg";
import { FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return (
    <ul className="Navbar">
      <div id="Logo">
        <img src={Logo} alt="" />
        <div>
          <h3>Alt Om Gaming</h3>
          <p>SAMMEN STÅR VI STÆRKEST</p>
        </div>
      </div>
      <div id="Links">
        <li>
          <NavLink className="fix" to="/Home">
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink className="fix" to="/Post">
            Post
          </NavLink>
        </li>
      </div>
      <NavLink target="blank" to="https://www.facebook.com/aalborgkfum/">
        <FaFacebook id="Face" />
      </NavLink>
    </ul>
  );
};
export default Navbar;
