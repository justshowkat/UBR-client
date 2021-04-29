import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AdminNavBar.css";

const AdminNavBar = () => {
  return (
    <div>
      <Navbar className="custom-nav" expand="lg">
        <div className="container">
          <Navbar.Brand>
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
              <Nav.Link>
                {" "}
                <Link className="custom-nav-link" to="/orders">
                  Order List
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="custom-nav-link" to="/addservice">
                  Add Service
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="custom-nav-link" to="/pagerole">
                  Add new Admin
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="custom-nav-link" to="/manageservice">
                  Manage Service
                </Link>
              </Nav.Link>
              <Button className="custom-button">Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default AdminNavBar;
