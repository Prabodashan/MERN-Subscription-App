const mongoose = require("mongoose");

const packageVariantsSchema = mongoose.Schema({
  packageType: {
    type: String,
    required: true,
  },
  stipePackagePrice: {
    type: String,
    required: true,
  },
  initialPrice: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  isDiscounted: Boolean,
  createdAt: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PackageVariants", packageVariantsSchema);
