import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.jpg";
import { FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <ul className="Navbar">
      <div id="Logo">
        <h1>INGN</h1>
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
        <li>
          <NavLink className="fix" to="/Post">
            contact
          </NavLink>
        </li>
        <li>
          <NavLink className="fix" to="/Post">
            postlist
          </NavLink>
        </li>
        <li>
          <NavLink className="fix" to="/Post">
            info
          </NavLink>
        </li>
        <li>
          <NavLink className="fix" to="/Post">
            klik
          </NavLink>
        </li>
      </div>
      <FaFacebook></FaFacebook>
      <div className="burgerMenu" onClick={handleMenuToggle}>
        {menuOpen ? <GiHamburgerMenu /> : <IoMdClose />}
      </div>
    </ul>
  );
};
export default Navbar;
