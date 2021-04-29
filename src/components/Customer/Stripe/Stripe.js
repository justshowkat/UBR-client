import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './Stripe.css'
import CheckoutForm from "./CheckOut";

const Stripe = () => {
    const promise = loadStripe("pk_test_51IhOGYBAygCepCcSLinXh2HNMGl31v25dDpeCHU0JVGGNDbushNFYl5QgiIhN4HRTE23oyAzjTyZm4VfBdm0KaWm004erLEz49");

  return (
    <div>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Stripe;
