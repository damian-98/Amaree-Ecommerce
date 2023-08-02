import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@material-ui/core/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navigationbar({ size }) {
  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <NavLink to="/" id="nav-logo">
        Beauty Bundles
      </NavLink>
      <Navbar.Toggle id="navbar-toggler">
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="ms-auto" id="nav">
          <NavLink to="/" id="nav-links">
            Home
          </NavLink>
          <NavLink to="/shop" id="nav-links">
            Shop
          </NavLink>
          <NavLink to="/contact" id="nav-links">
            Contact
          </NavLink>
          <NavLink to="/about" id="nav-links">
            About
          </NavLink>
          <NavLink to="/cart" id="shopping-cart">
            <div style={{ display: "block" }}>
              <Badge color="secondary" badgeContent={size}>
                <AiOutlineShoppingCart />{" "}
              </Badge>
            </div>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
