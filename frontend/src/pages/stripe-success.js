import React, { useContext, useEffect } from "react";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StripeSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get("/stripe/subscription-status", {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("auth")).token, //the token is a variable which holds the token
        },
      });
      console.log("SUBSCRIPTION STATUS => ", data);
      if (data && data.length === 0) {
        navigate("/");
      } else {
        navigate("/account");
      }
    };
    getSubscriptionStatus();
  }, []);

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
