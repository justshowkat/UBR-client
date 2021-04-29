import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../Contex/Provider";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setloggedInUser] = useContext(AppContext)
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
