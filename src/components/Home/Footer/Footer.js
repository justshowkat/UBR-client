import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const quickLinks = ["About Us", "Services", "Pricing", "Gallery", "Contact"];
  return (
    <div className="footer-container">
      <div className="container">
        <Row className="justify-content-md-center">
          {/* 1st col starts here */}
          <Col>
            <img
              src="/ubrLogo.svg"
              width="200"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h3>
              Elit duis tristique sollicitudin nibh sit amet. Integer feugiat
              scelerisque varius morbi enim nunc faucibus. Eget duis at tellus
              at urna condimentum.
            </h3>
          </Col>
          {/* 1st col ends here */}
          {/* 2nd col starts here */}
          <Col>
            <Row>
              <Col>
                <ListGroup className="footer-card">
                  <ListGroup.Item className="footer-card">
                    {" "}
                    <strong>Some Quick Links: </strong>{" "}
                  </ListGroup.Item>
                  {quickLinks.map((res) => (
                    <ListGroup.Item className="footer-card">
                      {" "}
                      <FontAwesomeIcon
                        className="review-star"
                        icon={faArrowAltCircleRight}
                      />{" "}
                      {res}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col>
                <ListGroup className="footer-card">
                  <ListGroup.Item className="footer-card">
                    {" "}
                    <h2>Get In Touch</h2>{" "}
                  </ListGroup.Item>
                  <ListGroup.Item className="footer-card">
                    12th Dragon street, Utrecht 1292, Netherland
                  </ListGroup.Item>
                  <ListGroup.Item className="footer-card">+26 1234 5678 <br/> +26 1234 5679</ListGroup.Item>
                  <ListGroup.Item className="footer-card">
                    info@yoursite.com support@yoursite.com
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
          {/* 2nd col ends here */}
        </Row>
      </div>
    </div>
  );
};

export default Footer;
