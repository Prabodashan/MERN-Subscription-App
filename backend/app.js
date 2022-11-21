const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./routes/auth");
const stripeRoute = require("./routes/subs");
const uploadRoute = require("./routes/FileRoutes");
const questionRoute = require("./routes/QuestionsRoute");
const packageQuestion = require("./routes/PackageQuestionRoute");
const orderRoute = require("./routes/OrderRoute");
const customerAnswersRoute = require("./routes/CustomerAnswers");
const mailRouter = require("./routes/MailRouter");
const chatRoute = require("./routes/ChatRoute");
const notificationRoute = require("./routes/NotificationRoute");
const packageVarientRoute = require("./routes/PackageVarientRoute");
const packageCriteriaRoute = require("./routes/PackageCriteriaRoute");
const packageRoute = require("./routes/PackageRoute");

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
app.use("/api/file", uploadRoute);
app.use("/api/questions", questionRoute);
app.use("/api/package-questions", packageQuestion);
app.use("/api/order", orderRoute);
app.use("/api/customer-answer", customerAnswersRoute);
app.use("/api/stripe", stripeRoute);
app.use("/api/mail", mailRouter);
app.use("/api/chat", chatRoute);
app.use("/api/notification", notificationRoute);
app.use("/api/package-varient", packageVarientRoute);
app.use("/api/package-criteria", packageCriteriaRoute);
app.use("/api/package", packageRoute);

//listen
const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`Server is running on port ${port}`));
