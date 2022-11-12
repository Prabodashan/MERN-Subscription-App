import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";

import { UserContext } from "../context";

const StripeSuccess = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get("/stripe/subscription-status", {
        // headers: {
        //   Authorization:
        //     "Bearer " + JSON.parse(localStorage.getItem("auth")).token, //the token is a variable which holds the token
        // },
      });
      console.log("SUBSCRIPTION STATUS => ", data);
      if (data && data.length === 0) {
        navigate("/");
      } else {
        // update user in local storage
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        // update user in context
        setState(auth);
        setTimeout(() => {
          navigate("/account");
        }, 1000);
      }
    };
    if (state && state.token) getSubscriptionStatus();
  }, [state && state.token]);

  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default StripeSuccess;
