import React from "react";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      &copy; {new Date().getFullYear()} Beauty Bundles. All Rights Reserved
      <NavLink
        to={{ pathname: "https://www.instagram.com/" }}
        target="_blank"
        className="logo-color instagram-logo"
      >
        <BsInstagram />
      </NavLink>
    </footer>
  );
};

export default Footer;
