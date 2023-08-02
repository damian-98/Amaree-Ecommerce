import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-copyright footer-background">
      &copy; {new Date().getFullYear()} Beauty Bundles. All Rights Reserved
      <Link
        to={{ pathname: "https://www.instagram.com/" }}
        target="_blank"
        className=""
      >
        <div className="logo-color instagram-logo">
          <BsInstagram />
        </div>
      </Link>
    </div>
  );
}

export default Footer;
