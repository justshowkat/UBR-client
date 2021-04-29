import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { AppContext } from "../../globalComponent/Contex/Provider";
import Stripe from "../Stripe/Stripe";
import "./BookAService.css";

const BookAService = () => {
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

  const [orderStatus, setOrderStatus] = useState(false)

  const handleBookAServiceSubmit =() => {
    const bookingInfo = {
      date: document.getElementById('book-service-date').value,
      name: document.getElementById('book-service-user-name').value,
      email: loggedInUser.email,
      serviceType: document.getElementById('book-service-service-type').value,
      paidWith: 'Credit Card',
      status: 'pending'
    }
    console.log(bookingInfo)

    fetch('https://ubr-bike-repair.herokuapp.com/book-service',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(bookingInfo)
    }).then(res => {
      res.status === 200 && setOrderStatus(true)
      setTimeout(function(){ setOrderStatus(false) }, 4000);
    })
  }
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="book-a-service-container">
      <Card className="book-a-service-custom-card">
        <Card.Img
          variant="top"
          src={
            loggedInUser.image
              ? loggedInUser.image
              : "https://i.ibb.co/4FWN1JV/Evrinpreet-Kaur-18-works-at-the-Natomas-Bike-Shop-in-Sacramento-on-Monday-Sept-28-2020.jpg"
          }
        />
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                id='book-service-date'
                value={currentDate}
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Name"
                id='book-service-user-name'
                value={loggedInUser.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                size="lg"
                type="email"
                placeholder="Email"
                id='book-service-user-email'
                value={loggedInUser.email}
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                id='book-service-service-type'
                placeholder="Products/services"
                required
              />
            </Form.Group>
            <div className="payment-section">
              <Stripe></Stripe>
            </div>
            {paymentStatus ? (
              <Button type="button" variant='success' onClick={handleBookAServiceSubmit}>Submit</Button>
            ) : (
              <div class="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Please confirm your payment before placing your order.
              </div>
            )}
          </Form>
        </Card.Body>
       { orderStatus && <Card.Footer className="book-a-service-custom-card-footer">
          <small className="text-muted">Your Purchase is successful!</small>
        </Card.Footer>}
      </Card>
    </div>
  );
};

export default BookAService;
