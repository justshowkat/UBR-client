import { faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { AppContext } from "../../globalComponent/Contex/Provider";
import ReviewCard from "../../Home/Review/ReviewCard/ReviewCard";
import "./Review.css";

const Review = () => {
  const [loggedInUser, setloggedInUser] = useContext(AppContext);
  const [ratingValue, SetRatingValue] = useState("5");
  const [addReviewStatus, setAddReviewStatus] = useState(false);
  const [userReview, setUserReview] = useState({
    condition: false,
    _id: "",
    name: "",
    email: "",
    marks: "",
    description: "",
  });

  useEffect(() => {
    fetch(`https://ubr-bike-repair.herokuapp.com/rating/${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setUserReview({
            condition: false,
            _id: "",
            name: "",
            email: "",
            marks: "",
            description: "",
          });
        } else {
          const { _id, name, email, marks, description } = data[0];
          setUserReview({
            condition: true,
            _id,
            name,
            email,
            marks,
            description,
          });
        }
      });
  }, []);

  const handleOnChangeValue = (event) => {
    const rating = event.target.value;
    SetRatingValue(rating);
  };
  const handleSubmitRating = () => {
    const ratingDescription = document.getElementById("rating-description")
      .value;
    const customerRating = {
      image: loggedInUser.image,
      name: loggedInUser.name,
      email: loggedInUser.email,
      marks: ratingValue,
      description: ratingDescription,
    };

    fetch("https://ubr-bike-repair.herokuapp.com/add-rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerRating),
    }).then((res) => {
      console.log(res);
      res.status === 200 && setAddReviewStatus(true);
      setTimeout(() => setAddReviewStatus(false), 3000);
    });
    console.log(customerRating);
  };

  const handleReviewDelete = id => {
    console.log(id)
    fetch(`https://ubr-bike-repair.herokuapp.com/delete-review/${id}`, {
      method: 'DELETE'
    }).then(res => console.log(res))
  }

  return (
    <div className="review-container">
      <Card className="custom-review-card" style={{ width: "48rem" }}>
        <Card.Body>
          <h1>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </h1>
          <h3>Leave a Review</h3>
          {addReviewStatus && (
            <div class="alert alert-success" role="alert">
              <strong>Review Submited!</strong>
            </div>
          )}
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="email"
              value={loggedInUser.email}
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="name"
              value={loggedInUser.name}
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate our Service: </Form.Label>
            <Form.Control
              as="select"
              value={userReview.condition ? userReview.marks : ratingValue}
              onChange={handleOnChangeValue}
              disabled={userReview.condition ? true : false}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Your thoughts: </Form.Label>
            {userReview.condition ? (
              <Form.Control
                id="rating-description"
                as="textarea"
                rows={3}
                value={userReview.description}
                disabled
              />
            ) : (
              <Form.Control id="rating-description" as="textarea" rows={3} />
            )}
          </Form.Group>
          {userReview.condition ? (
            <Button variant="danger" onClick={()=> handleReviewDelete(userReview._id)}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete your review
            </Button>
          ) : (
            <Button variant="success" onClick={handleSubmitRating}>
              Submit your review
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
