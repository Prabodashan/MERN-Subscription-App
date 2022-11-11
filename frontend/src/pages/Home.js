import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../context";
import PriceCard from "./../components/cards/PriceCard";

const Home = () => {
  const [state] = useContext(UserContext);
  const [prices, setPrices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPrices();
  }, []);
  const fetchPrices = async () => {
    const { data } = await axios.get("/stripe/prices");
    console.log("prices get request", data);
    setPrices(data);
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    // console.log("plan clicked", price.id);
    if (state && state.token) {
      const { data } = await axios.post("/stripe/create-subscription", {
        priceId: price.id,
        // user: state.user,
      });
      window.open(data);
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">
          Explore the right plan for your business
        </h1>
        <p className="lead pb-4">Choose a plan that suites you best!</p>
      </div>

      <div className="row pt-5 mb-3 text-center">
        {prices &&
          prices.map((price) => (
            <PriceCard
              key={price.id}
              price={price}
              handleSubscription={handleClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
