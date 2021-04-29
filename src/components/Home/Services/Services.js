import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import PageLoader from "../../globalComponent/Loader/Loader";
import "./Service.css";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [servicesData,  setServicesData] = useState([])

    useEffect(() => {
      fetch('https://ubr-bike-repair.herokuapp.com/all-services')
      .then(res => res.json())
      .then(data => setServicesData(data))
    }, [])
  return (
    <div id='service-section' className="service-section">
      <div className="container">
        <div className="service-section-header">
          <h1>
            Our <Badge variant="success">Services</Badge>
          </h1>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className="service-section-body">
            {servicesData.length === 0 && <PageLoader></PageLoader>}
            {servicesData.map(service => <ServiceCard service={service}></ServiceCard>)}
        </div>
      </div>
    </div>
  );
};

export default Services;
