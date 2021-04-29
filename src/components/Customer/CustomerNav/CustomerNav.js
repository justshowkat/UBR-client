import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomerNav = () => {
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
                <Link className="custom-nav-link" to="/book">
                  Book
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="custom-nav-link" to="/booking-list">
                  Booking list
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="custom-nav-link" to="/review">
                  Review
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

export default CustomerNav;