const mongoose = require("mongoose");

const packageCriteriasSchema = mongoose.Schema({
    criteriaName: {
        type: String,
        required: true,
      },
      criteriaDescription: {
        type: String,
      },
      createdAt: {
        type: String,
        required: true,
      },
      createdBy: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.model('PackageCriterias',packageCriteriasSchema);