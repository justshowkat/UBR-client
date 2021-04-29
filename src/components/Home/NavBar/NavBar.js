import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../../globalComponent/Contex/Provider";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser, setloggedInUser] = useContext(AppContext);
  return (
    <div>
      <Navbar className="custom-nav" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src="/ubrLogo.svg"
                width="100"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about-us">About us</Nav.Link>
              <Nav.Link href="#service-section">service</Nav.Link>
              <Nav.Link href="#why-us">Work With Us</Nav.Link>
              <Nav.Link href="#review-section">Review</Nav.Link>
              <Nav.Link href="#emergency-service">Emergency contact</Nav.Link>
              <Link to="/dash-board">
                <Button className="custom-button">{loggedInUser.isLoggedIn? (loggedInUser.isAdmin? 'Admin Panel' : 'Dashboard') : 'Login'}</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
