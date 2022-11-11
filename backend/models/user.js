const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    max: 64,
    require: true,
  },
  stripe_customer_id: String,
  subscriptions: [],
});

module.exports = mongoose.model("User", userSchema);
