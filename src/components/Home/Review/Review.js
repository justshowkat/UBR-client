import { faSmileWink } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import "./Review.css";
import ReviewCard from "./ReviewCard/ReviewCard";

const Review = () => {
  const [rdata, setRdata] = useState([])

  useEffect(()=>{
    fetch('https://ubr-bike-repair.herokuapp.com/rating/')
    .then(res => res.json())
    .then(data => setRdata(data))
  }, [])
  return (
    <div id='review-section' className="container">
      <h1 className='review-header'>Happy Customers <FontAwesomeIcon icon={faSmileWink} /></h1> 
      <div className="review-container">
        {rdata.map((review) => (
          <ReviewCard review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
