import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AppContext } from "../../globalComponent/Contex/Provider";

const MakeAdmin = () => {
  const [loggedInUser, setloggedInUser, newService, setNewServices] = useContext(AppContext)
  const [addAdmin, setAddStatus] = useState(false)

  const handleAddAdmin = () => {
    const adminMail = document.getElementById("admin-email").value;
    console.log(adminMail);
    const adminDetails = {
      email: adminMail,
      isAdmin: true,
      addedBy: loggedInUser.email,
      date: new Date().toLocaleDateString()
    }

    fetch("https://ubr-bike-repair.herokuapp.com/add-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminDetails),
    }).then((res) => {
      res.status === 200 && setAddStatus(true);
    });
  };
  return (
    <div className="container add-service-section">
      <div className="add-service-container">
        <h1>Add New Admin</h1>
        <Form>
          <Form.Group>
            <Form.Label>New Admin Mail</Form.Label>
            <Form.Control
              type="email"
              id="admin-email"
              placeholder="Enter a new admin email"
            />
          </Form.Group>
          <Button onClick={handleAddAdmin} variant="success" type="button">
            Add New Admin
          </Button>
          {addAdmin && <div class="alert alert-success mt-2" role="alert">
                  <strong>success!</strong> you've added a new Admin
                </div>}
        </Form>
      </div>
    </div>
  );
};

export default MakeAdmin;
