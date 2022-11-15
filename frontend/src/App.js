import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AuthRoute from "./components/routes/AuthRoute";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StripeSuccess from "./pages/stripe-success";
import StripeCancel from "./pages/stripe-cancel";
import Account from "./pages/Account";
import Basic from "./pages/plans/Basic";
import Standard from "./pages/plans/Standard";
import Premium from "./pages/plans/Premium";
import Question from "./pages/Question";

function App() {
  return (
    <>
      <Question />
      {/* <BrowserRouter>
        <Nav />
        <Toaster
          position="buttom-right"
          toastOptions={{
            duration: 2000,
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/premium" element={<Premium />} />
          <Route exact path="/stripe/success" element={<StripeSuccess />} />
          <Route exact path="/stripe/cancel" element={<StripeCancel />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
