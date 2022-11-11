import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AuthRoute from "./components/routes/AuthRoute";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StripeSuccess from "./pages/stripe-success";
import StripeCancel from "./pages/stripe-cancel";

function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route exact path="/stripe/success" element={<StripeSuccess />} />
          <Route exact path="/stripe/cancel" element={<StripeCancel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
