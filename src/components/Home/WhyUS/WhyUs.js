import { faCertificate, faDraftingCompass, faHourglassHalf, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./WhyUs.css";

const WhyUs = () => {
    const WhyUsData = [
        {
            title: 'Expert Mechanics',
            icon: faDraftingCompass,
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
            title: 'Affordable Price',
            icon: faMoneyBillAlt,
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
            title: 'Trusted by 1.000',
            icon: faCertificate,
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
            title: 'Fast Services',
            icon: faHourglassHalf,
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
    ]
  return (
    <div id='why-us' className="why-us-container">
      <div className="container">
        <Row className="why-us-section">
          <Col className='first-column'>
            {" "}
            <img
              className="why-us-section-image"
              src="https://i.ibb.co/KymvSW6/why-us.jpg"
              alt="why-us"
              border="0"
            />
          </Col>
          <Col className='second-column'>
            <h1>Why Choose Us?</h1>
            <h3 className='exception'>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </h3>
            <div className="why-us-points">
              {WhyUsData.map(res => (<Card className='why-us-card'>
                <Card.Body>
                  <h1>{res.title} <FontAwesomeIcon icon={res.icon} /></h1>
                  <Card.Text>
                    {res.des}
                  </Card.Text>
                </Card.Body>
              </Card>) )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyUs;
