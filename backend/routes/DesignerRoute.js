const express = require("express");
const router = express.Router();
const { createDesigner, getAllDesigners, deleteDesigner, getDesignerById, updateDesigner } = require("../controllers/DesignerController");


router.get("/:id", getDesignerById);
router.get("/", getAllDesigners);
router.post("/", createDesigner);
router.delete("/:id", deleteDesigner);
router.put("/:id", updateDesigner);

module.exports = router;
