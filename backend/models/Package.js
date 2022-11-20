const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  packageId: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  packageVariants: [
    {
      packageVariantId: String,
      required: true,
    },
  ],
  packageFeatures: [
    {
      packageCriteriaId: String,
      value: String,
    },
  ],
  createdAt: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Package", packageSchema);
