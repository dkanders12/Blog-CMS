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
      <div className={`Links ${menuOpen ? "open" : ""}`}>
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
          <NavLink className="fix" to="/Contact">
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink className="fix" to="/PostList">
            Postliste
          </NavLink>
        </li>
        <li>
          <NavLink className="fix" to="/Info">
            Info
          </NavLink>
        </li>
        <li>
          <NavLink className="fix" to="/Klik">
            Klik
          </NavLink>
        </li>
      </div>
      <FaFacebook />
      <div className="burgerMenu" onClick={handleMenuToggle}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
    </ul>
  );
};

export default Navbar;
