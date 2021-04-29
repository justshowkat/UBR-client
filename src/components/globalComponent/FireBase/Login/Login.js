import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import { firebaseConfig } from "../Config";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppContext } from "../../Contex/Provider";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [loggedInUser, setloggedInUser, newService, setNewServices, AdminStatus, setAdminStatus] = useContext(AppContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;

        fetch('https://ubr-bike-repair.herokuapp.com/admins/'+user.email)
        .then(res => res.json())
        .then((data, err) => {
          console.log(data.isAdmin)
          setAdminStatus(data.isAdmin)
        })
        user.emailVerified && setloggedInUser({
          name: user.displayName,
          email: user.email,
          verified: user.emailVerified,
          image: user.photoURL,
          isLoggedIn: true,
        });
        history.replace(from);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorCode, errorMessage, email);
      });
  };
  
  return (
    <div className="login-container">
      <div className="container">
        <Button className="login-button" onClick={handleGoogleLogin}>
          <FontAwesomeIcon className="google-icon" icon={faGoogle} /> login With
          Google{" "}
        </Button>
        <br /> <p>or</p>
        <Link to="/">
          <Button variant="warning">
            <FontAwesomeIcon icon={faHome} /> Go back{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;