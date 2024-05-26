const express = require("express");
const router = express.Router();
const controller = require("./admin_controller");

// Route to get all admins
router.get("/", controller.findAll);
// Route to get an admin by ID
router.get("/:id", controller.findById);

module.exports = router;
