const Designer = require("../models/designer");

exports.createDesigner = async (req, res) => {
  const exists = await designerExists(req.body.DesignerId);
  if (exists) {
    return res.status(409).json({ message: "Designer ID Already Exist" });
  }

  try {
    const {
      designerId,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      createdAt,
      createdBy,
    } = req.body;

    const designer = await new Designer({
      designerId,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      designer,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllDesigners = async (req, res) => {
  console.log("get all");
  const designers = await Designer.find();
  try {
    return res.json({
      designers,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getDesignerById = async (req, res) => {
  console.log("object");
  const exists = await designerExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Designer does not exist" });
  }
  const designer = await Designer.findOne({ designerId: req.params.id });
  try {
    return res.json({
      designer,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteDesigner = async (req, res) => {
  const exists = await designerExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Designer does not exist" });
  }
  const designer = await Designer.deleteOne({ designerId: req.params.id });
  try {
    return res.json({
      designer,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateDesigner = async (req, res) => {
  const exists = await designerExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Designer does not exist" });
  }
  try {
    const designer = await Designer.findOneAndUpdate(
      { designerId: req.params.id },
      {
        $set: req.body,
      }
    );
    return res.json({
      designer,
    });
  } catch (err) {
    console.log(err);
  }
};

designerExists = async (req, res) => {
  const value = await Designer.findOne({ designerId: req });
  if (value) {
    return true;
  } else {
    return false;
  }
};
