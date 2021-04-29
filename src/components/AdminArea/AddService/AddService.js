import { Alert } from "bootstrap";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AppContext } from "../../globalComponent/Contex/Provider";
import PageLoader from "../../globalComponent/Loader/Loader";
import ServiceCard from "../../Home/Services/ServiceCard/ServiceCard";
import "./AddService.css";

const AddService = () => {
  const [imgUpload, setImgUpload] = useState({
    url: '',
    status: false
  });

  const [postStatus, setPostStatus] = useState(false)
  const [
    loggedInUser,
    setloggedInUser,
    newService,
    setNewServices,
  ] = useContext(AppContext);

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "66c71e0477f01e070f4623dfde104b99");
    imageData.append("image", event.target.files[0]);

    const axios = require("axios");

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.url);
        response.data.success && setImgUpload({
          url: response.data.data.url,
          status: response.data.success
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddService = () => {
    const serviceTitle = document.getElementById("service-title").value;
    const serviceDescription = document.getElementById("service-description").value;

    const serviceData = {
      icon: imgUpload.url,
      title: serviceTitle,
      description: serviceDescription,
      addedBy: loggedInUser.email,
      date: new Date().toLocaleDateString()
    }
    
    fetch('https://ubr-bike-repair.herokuapp.com/add-service',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(serviceData)
    }).then(res => {
      res.status === 200 && setPostStatus(true)
    })
  };
  return (
    <div className="add-service-section">
      <div className="container add-service-container">
        <h1>Add New Service</h1>
        <Form>
          <Form.Group>
            <div class="form-group">
              <label for="exampleInputFile">Service Icon(PNG with transparent background)</label>
              <input
                type="file"
                class="form-control-file"
                id="Service-icon"
                onChange={handleImageUpload}
                aria-describedby="fileHelp"
              />

              {!imgUpload.status ? (
                <small id="fileHelp" class="form-text text-muted">
                  Please choose an icon for your service.
                </small>
              ) : (
                <div class="alert alert-success mt-2" role="alert">
                  <strong>success!</strong> Image Upload Completed...
                </div>
              )}
            </div>
            <Form.Label>Service Title</Form.Label>
            <Form.Control
              type="text"
              id="service-title"
              placeholder="Enter a title"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" id="service-description" rows={3} />
          </Form.Group>
          {!imgUpload.status ? (
            <Button
              onClick={() => handleAddService()}
              variant="warning"
              type="button"
              disabled
            >
              Wait to finish the image upload!
            </Button>
          ) : (
            <Button
              onClick={() => handleAddService()}
              variant="success"
              type="button"
            >
              Submit
            </Button>
          )}
          {postStatus && <div class="alert alert-success mt-2" role="alert">
                  <strong>success!</strong> you've posted a new service!
                </div>}
        </Form>
      </div>
      {/* <ServiceCard service={}></ServiceCard> */}
    </div>
  );
};

export default AddService;
