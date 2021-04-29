import {
  faPlusCircle,
  faTrashAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service, manageService }) => {
  const { description, title, icon, addedBy, date } = service;
  const handleDeleteService = id => {
    fetch(`https://ubr-bike-repair.herokuapp.com/delete-service/${id}`, {
      method: 'DELETE'
    }).then(res => console.log(res))
  }

  return (
    <div>
      <Card className="custom-service-card" style={{ width: "18rem" }}>
        {icon ? (
          <img src={icon} alt="" />
        ) : (
          <Card.Title>
            <FontAwesomeIcon className="service-icon" icon={faWrench} />
          </Card.Title>
        )}

        <Card.Body>
          <h2>{title}</h2>
          <Card.Text>{description}</Card.Text>
          {manageService ? <Link to="/manageservice"> <Button variant="danger" onClick={() => handleDeleteService(service._id)}>
               Detele now... <FontAwesomeIcon icon={faTrashAlt} />
            </Button> </Link> : <Link to="/book">
            <Button variant="success">
              <FontAwesomeIcon icon={faPlusCircle} /> Book Now
            </Button>{" "}
          </Link>}
        </Card.Body>
        {manageService && (
          <Card.Footer>
            <p>Created By: <strong>{addedBy}</strong> </p>
            <p>Created at: {date}</p>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
};

export default ServiceCard;
