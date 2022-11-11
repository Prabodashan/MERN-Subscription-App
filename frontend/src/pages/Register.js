import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import { UserContext } from "../context";

import Button from "../components/Button";
import Input from "../components/Input";

const Register = () => {
  const [state, setState] = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    // console.log(name, email, password);
    try {
      e.preventDefault();
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        console.log(data);
        setName("");
        setEmail("");
        setPassword("");
        localStorage.setItem("auth", JSON.stringify(data));
        setState(data);
        toast.success(`Hey ${data.user.name}. Welcome to the Platform`);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, try again");
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Let's Get Started</h1>
          <p className="lead pb-4">
            Sign up for free. No credit card required.
          </p>
          <div className="form-group">
            <Input label="Name" value={name} setValue={setName} />
            <Input
              label="Email"
              value={email}
              setValue={setEmail}
              type="email"
            />
            <Input
              label="Password"
              value={password}
              setValue={setPassword}
              type="password"
            />
            <div className="d-grid">
              <Button
                handleClick={handleClick}
                type="danger"
                size="sm"
                text="Register"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
