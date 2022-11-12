import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context";

const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <ul className="nav border">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>

      {state && state.token ? (
        <div className="nav-item dropdown">
          <li className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            {state.user.name}
          </li>
          <ul className="dropdown-menu">
            <li className="nav-item dropdown-item">
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </li>
            <li className="nav-item dropdown-item">
              <Link onClick={logout} className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
