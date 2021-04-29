import { faQuoteLeft, faSmileWink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  console.log(review);

  return (
    <div>
      <Card className="review-custom-card" style={{ width: "18rem" }}>
        <Card.Body>
          <img
            className="review-card-image"
            src="https://i.ibb.co/Y4CMzTp/startrans.png"
            alt=""
            srcset=""
          />
          <h3>
            {" "}
            <strong>{review.name.split(" ", 1)}</strong>
          </h3>
          <div className="review-description-area">
          
            <Card.Text><FontAwesomeIcon icon={faQuoteLeft}/> {review.description}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="review-custom-card-footer">
          {review.image === '' ? <FontAwesomeIcon icon={faSmileWink}/> :<Card.Img
            className="review-card-avatar"
            variant="top"
            src={review.image}
          />}
          <h5 className="text-center">
            <FontAwesomeIcon className="review-star" icon={faStar} />
            <FontAwesomeIcon className="review-star" icon={faStar} />
            <FontAwesomeIcon className="review-star" icon={faStar} />
          </h5>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ReviewCard;
