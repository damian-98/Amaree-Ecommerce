import React from "react";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-copyright footer-background">
      &copy; {new Date().getFullYear()} Beauty Bundles. All Rights Reserved
      <NavLink to={{ pathname: "https://www.instagram.com/" }} target="_blank">
        <div className="logo-color instagram-logo">
          <BsInstagram />
        </div>
      </NavLink>
    </section>
  );
};

export default Footer;
