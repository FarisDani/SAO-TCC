const express = require("express");
const router = express.Router();
const controller = require("./admin_controller");

// Route to get all admins
router.get("/", controller.findAll);

// Route to create a new admin
router.post("/", controller.create);

// Route to get an admin by ID
router.get("/:id", controller.findById);

// Route to update an admin by ID
router.put("/:id", controller.update);

// Route to delete an admin by ID
router.delete("/:id", controller.delete);

module.exports = router;
