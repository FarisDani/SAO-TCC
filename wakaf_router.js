const express = require("express");
const router = express.Router();
const controller = require("./wakaf_controller");

router.get("/", controller.findAll);
router.post("/", controller.create);
router.get("/:id", controller.findById);
router.delete("/:id", controller.delete);

module.exports = router;
