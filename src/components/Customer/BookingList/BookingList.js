import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AppContext } from "../../globalComponent/Contex/Provider";
import "./BookingList.css";

const BookingList = () => {
  const [
    loggedInUser,
    setloggedInUser,
    newService,
    setNewServices,
    AdminStatus,
    setAdminStatus,
    paymentStatus,
    setPaymentStatus,
  ] = useContext(AppContext);
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetch(`https://ubr-bike-repair.herokuapp.com/order/${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, []);
  return (
    <div className="booking-list-container">
      {bookingList.length === 0 && (
        <div class="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> You don't have any bookings!
        </div>
      )}
      {bookingList.map((booking) => (
        <Card className="booking-list-card">
          <Card.Body>
            <h1>
              <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
            </h1>
            <h2>{booking.serviceType}</h2>
            <Card.Title>Booking date: {booking.date}</Card.Title>
            <Card.Text>
              Customer Name: <strong>{booking.name}</strong>
            </Card.Text>
          </Card.Body>
          {booking.status === "done" ? (
            <Card.Footer className="booking-list-card-success">
              <small>{booking.status}</small>
            </Card.Footer>
          ) : booking.status === "pending" ? (
            <Card.Footer className="booking-list-card-error">
              <small>{booking.status}</small>
            </Card.Footer>
          ) : (
            <Card.Footer className="booking-list-card-warning">
              <small>{booking.status}</small>
            </Card.Footer>
          )}
        </Card>
      ))}
    </div>
  );
};

export default BookingList;
