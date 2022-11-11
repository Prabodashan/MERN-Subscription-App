import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../../context";

const AuthRoute = ({ ...rest }) => {
  const [state, setState] = useContext(UserContext);

  if (!state) {
    return <Navigate to="/login" />;
    // <Redirect to="/login" />;
  }

  return state && state.token ? <Route {...rest} /> : <Route />;
};

export default AuthRoute;
