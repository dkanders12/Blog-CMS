import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div>
        <p>Adresse:</p>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
      </div>
      <div>
        <p>Links</p>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
      </div>
      <div>
        <p>Politik</p>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
      </div>
      <div>
        <p>Kontakt</p>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
        <NavLink>link</NavLink>
      </div>
    </footer>
  );
};
