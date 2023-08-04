import React from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to={"/"}>
              Movie Time
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="shadow-none" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-start">
              <Link className="nav-link" to={"/movies/popular"}>
                Popular
              </Link>

              <Link className="nav-link" to={"/movies/top_rated"}>
                Top Rated
              </Link>

              <Link className="nav-link" to={"/movies/upcoming"}>
                Upcoming
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
