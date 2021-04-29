import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./OrderList.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [orderChangeStatus, setOrderChangeStatus] = useState(false);

  const handleOnClick = (id, status) => {
    // const changeStatus = document.getElementById("status-field").value;
    console.log(id, `${status}`);
    fetch(`https://ubr-bike-repair.herokuapp.com/update-order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ changeStatus : `${status}` }),
    }).then((res) => {
      res.status === 200 && setOrderChangeStatus(true);
      fetch("https://ubr-bike-repair.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
      setTimeout(function () {
        setOrderChangeStatus(false);
      }, 4000);
    });
  };

  useEffect(() => {
    fetch("https://ubr-bike-repair.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="container">
      <div className="mt-5 orderTable">
        <h1>All Of the Orders</h1>
        {orderChangeStatus && (
          <div class="alert alert-success" role="alert">
            <strong>Status Updated!!</strong>
          </div>
        )}
        <Table className="custom-table" bordered striped hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Date</th>
              <th>Service</th>
              <th>Pay with</th>
              <th>Status</th>
              <th>select status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td id="order-email">{order.email}</td>
                <td id="order-date">{order.date}</td>
                <td id="order-service">{order.serviceType}</td>
                <td id="order-pay">{order.paidWith}</td>
                <td>{order.status}</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button onClick={() => handleOnClick(order._id, 'done')} type="button" class="btn btn-success">
                      Done
                    </button>
                    <button onClick={() => handleOnClick(order._id, 'on going')} type="button" class="btn btn-warning">
                      Ongoing
                    </button>
                    <button onClick={() => handleOnClick(order._id, 'pending')} type="button" class="btn btn-danger">
                      Pending
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderList;
