const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./routes/auth");
const stripeRoute = require("./routes/subs");

const app = express();

//middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json({ limit: "5mb" }));

//db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connection established"))
  .catch((err) => console.error("DB Connection Error", err));

//autoload routes
app.use("/api/auth", authRoute);
app.use("/api/stripe", stripeRoute);

//listen
const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`Server is running on port ${port}`));
